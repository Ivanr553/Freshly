var Generator = require("yeoman-generator")

module.exports = class extends Generator {

    async prompting() {
        this.answers = await this.prompt([{
            type: 'input',
            name: 'name',
            message: 'Page Name:'
        }])
    }

    writing() {

        //Page Component
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

        this.fs.copyTpl(
            this.templatePath('package.js'),
            this.destinationPath(this.answers.name + '/package.json'),
            {
                name: this.answers.name,
                component: formatComponentName(this.answers.name)
            }
        )

        //Redux Folder
        this.fs.copyTpl(
            this.templatePath('redux/package.js'),
            this.destinationPath(this.answers.name + '/redux/package.json'),
            {
                name: this.answers.name,
                component: formatComponentName(this.answers.name)
            }
        )

        this.fs.copyTpl(
            this.templatePath('redux/reducer.js'),
            this.destinationPath(this.answers.name + '/redux/reducer.ts'),
            {
                name: this.answers.name,
                component: formatComponentName(this.answers.name)
            }
        )

        this.fs.copyTpl(
            this.templatePath('redux/initial-state.js'),
            this.destinationPath(this.answers.name + '/redux/initial-state.ts'),
            {
                name: this.answers.name,
                component: formatComponentName(this.answers.name)
            }
        )

        this.fs.copyTpl(
            this.templatePath('redux/events.js'),
            this.destinationPath(this.answers.name + '/redux/events.ts'),
            {
                name: this.answers.name,
                component: formatComponentName(this.answers.name)
            }
        )

        this.fs.copyTpl(
            this.templatePath('redux/event-factory.js'),
            this.destinationPath(this.answers.name + '/redux/event-factory.ts'),
            {
                name: this.answers.name,
                component: formatComponentName(this.answers.name)
            }
        )

        //Interfaces
        this.fs.copyTpl(
            this.templatePath('interfaces/index.js'),
            this.destinationPath(this.answers.name + '/interfaces/index.ts'),
            {
                name: this.answers.name,
                component: formatComponentName(this.answers.name)
            }
        )

        //Components
        this.fs.copyTpl(
            this.templatePath('components/package.js'),
            this.destinationPath(this.answers.name + '/components/package.json'),
            {
                name: this.answers.name,
                component: formatComponentName(this.answers.name)
            }
        )

        //Selectors
        this.fs.copyTpl(
            this.templatePath('selectors/index.js'),
            this.destinationPath(this.answers.name + '/selectors/index.ts'),
            {
                name: this.answers.name,
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