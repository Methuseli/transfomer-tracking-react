export class WebsitesService {
    getWebsites() {
        return fetch('websites').then(res => res.json()).then(d => d.data);
    }
}
