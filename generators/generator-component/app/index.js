var Generator = require("yeoman-generator")

module.exports = class extends Generator {

    async prompting() {
        this.answers = await this.prompt([{
            type: 'input',
            name: 'name',
            message: 'Component Name:'
        }])
    }

    writing() {
        this.fs.copyTpl(
            this.templatePath('index.js'),
            this.destinationPath(this.answers.name + '/index.ts'),
            {
                name: this.answers.name,
                component: formatComponentName(this.answers.name)
            }
        )

        this.fs.copyTpl(
            this.templatePath('selector-factory.js'),
            this.destinationPath(this.answers.name + '/selector-factory.ts'),
        )

        this.fs.copyTpl(
            this.templatePath('component.js'),
            this.destinationPath(this.answers.name + '/' + formatComponentName(this.answers.name) + '.tsx'),
            {
                component: formatComponentName(this.answers.name)
            }
        )
    }

}

function formatComponentName(name) {
    let component = ''

    for (let i = 0; i < name.length; i++) {
        if (i === 0) {
            component += name[i].toUpperCase()
            i++
        }
        if (name[i] === '-') {
            component += name[i + 1].toUpperCase()
            i++
        } else {
            component += name[i]
        }
    }

    return component
}