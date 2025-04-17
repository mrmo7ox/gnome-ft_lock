const { St } = imports.gi;
const Main = imports.ui.main; 
const Gio = imports.gi.Gio; 

let button; 

function init() {

}

function enable() {
    button = new St.Button({
        style_class: 'topbar-icon',
        reactive: true, 
        can_focus: true,
        track_hover: true
    });

    let icon = new St.Icon({
        icon_name: 'changes-prevent-symbolic', 
        style_class: 'system-status-icon'
    });
    button.set_child(icon);

    Main.panel._rightBox.insert_child_at_index(button, 0);

    button.connect('button-press-event', () => {
        Gio.Subprocess.new(
            ['gnome-terminal', '--', 'ft_lock'],
            Gio.SubprocessFlags.NONE
        );
    });
}

function disable() {
    if (button) {
        Main.panel._rightBox.remove_child(button);
        button.destroy();
        button = null;
    }
}