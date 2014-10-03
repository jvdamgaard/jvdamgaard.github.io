/**
 * Output text message in the console.
 *
 * The original idea was to have the entire application solely printet in the
 * console. Meeting a blank page would trigger the curiosity of you and make you
 * inspect the site in developer tools.
 * As soon as you opened the console you would know, that it was on purpose,
 * that the site was blank.
 * An entire UI could be build around the console with links and javascript
 * commands to trigger certain events.
 *
 * Anyway I abandoned this idea because it wouldn't involve any design and
 * stylesheet... though I think it was a funny idea.
 *
 * Anyway if you are reading this comment the idea would properly would have
 * worked :-)
 */

(function(root, factory) {
    'use strict';
    factory();
}(this, function() {
    'use strict';
    if (!console) {
        return;
    }
    var message = [
        '#############################################################################################',
        '                            __',
        '                           [  |                                             / |_',
        ' .---.  _ .--..--.  _ .--.  | |  .--.   _   __  _ .--..--.  .---.     ,--. `| |-\'',
        '/ /__\\\\[ `.-. .-. |[ \'/\'`\\ \\| |/ .\'`\\ \\[ \\ [  ][ `.-. .-. |/ /__\\\\   `\'_\\ : | |',
        '| \\__., | | | | | | | \\__/ || || \\__. | \\ \'/ /  | | | | | || \\__., _ // | |,| |,',
        ' \'.__.\'[___||__||__]| ;.__/[___]\'.__.\'[\\_:  /  [___||__||__]\'.__.\'(_)\\\'-;__/\\__/',
        '     __     __     [__|       _        \\__.\'      _____  _',
        '    / /    |  ]              (_)                 |_   _|/ |_',
        '   / / .--.| | .---.  .--.   __   .--./) _ .--.    | | `| |-\'',
        '  / // /\'`\\\' |/ /__\\\\( (`\\] [  | / /\'`\\;[ `.-. |   | |  | |',
        ' / / | \\__/  || \\__., `\'.\'.  | | \\ \\._// | | | |  _| |_ | |,',
        '/_/   \'.__.;__]\'.__.\'[\\__) )[___].\',__` [___||__]|_____|\\__/',
        '                                ( ( __))',
        '',
        '#############################################################################################',
        '',
        'Want to see how this has been build. Visit the source code on github: ',
        'https://github.com/jvdamgaard/jvdamgaard.github.io/tree/master/src/designit',
        '',
        'Or perhaps yo uwant to explore an alternative UI!',
        'Simply start the alternative UI from the console with:'
    ];

    console.error('This is just an error to get your attention :-)');
    console.log(message.join('\n'));
    console.log('%cgoto("home")', 'font-weight:bold;');
}));
