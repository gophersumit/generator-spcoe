const chalk = require('chalk');

const
    teal = '#ff7d26',
    white = '#fff',
    black = '#000',
    fgWhite = chalk.bgHex(black).hex(white),
    fgTeal = chalk.bgHex(black).hex(teal),
    fgTealLight = chalk.hex('#ff7d26'),
    tealOnWhite = chalk.bgHex(teal).hex(white),
    whiteOnTeal = chalk.bgHex(white).hex(teal),
    fgYellow = chalk.yellow;

// Greet friendly all users
const message = (generator) => {

    let logo =
    fgTeal("▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄") + fgTeal("▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄ \r\n") +
    tealOnWhite("     _____ _____   ") + whiteOnTeal("                           \r\n") +
    tealOnWhite("   /▄█████|█████\\  ") + whiteOnTeal("   ▄▄▄▄▄▄          ▄▄▄▄▄▄  \r\n") +
    tealOnWhite("   |█(___ |█|__)█| ") + whiteOnTeal(" |██ --   ▄▄▄█▄▄▄  █(      \r\n") +
    tealOnWhite("    \\▀██▄\\|████|   ") + whiteOnTeal("|███     ▄█/   \\█▄ ████|   \r\n") +
    tealOnWhite("    ____)█|█|      ") + whiteOnTeal(" |██ __  ▀█\\   /█▀ █(      \r\n") +
    tealOnWhite("   |█████/|█|      ") + whiteOnTeal("   ▀▀▀▀▀▀ ▀▀▀█▀▀▀  ▀▀▀▀▀▀  \r\n") +
    fgTeal("██████████████████████████") + fgTeal("████████████████████ \r\n")

    // printing logo
    generator.log(logo);

    // Generator Information
    generator.log(
        fgTealLight.bold(" Generator:  SPCoE  "),
    )
    // Author Information
    generator.log(
        fgTealLight.bold(" Author:  Sumit Agrawal    "),
    )
    generator.log(
        fgTealLight.bold(" Version:      "),
    )
}

module.exports = message;
