import * as shell from 'shelljs'

shell.cp('-R', 'static/js/', 'dist/static/')
shell.cp('-R', 'static/css', 'dist/static/')
