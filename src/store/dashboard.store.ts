import { action, observable } from 'mobx'

import { showdownConverter } from '../helpers'

const iframe = document.getElementById('markup') as HTMLIFrameElement

const defaultText = 'please enter some markup to print it'

export class DashboardStore {
    @observable markdown: string

    @action.bound
    addMarkdown(text: string) {
        this.markdown = text
    }

    @action.bound
    convertToPdf() {
        const html = showdownConverter.makeHtml(this.markdown || defaultText)
        iframe.contentDocument.body.innerHTML = html
        iframe.contentWindow.print()
    }
}
