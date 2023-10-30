export function schema() {
    return ({
        "news": {
            "menuName": "Новости",
            "title": {
                "name": "Название новости",
                "element": "input",
                "type": "text",
                "required": true
            },
            "text": {
                "name": "Текст новости",
                "element": "textarea",
                "type": "text",
                "required": true
            },
            "date": {
                "name": "Дата загрузки новости",
                "element": "input",
                "type": "date",
                "required": true
            },
            "img": {
                "name": "Картинки новости",
                "element": "input",
                "type": "file",
                "required": true
            },
        }
    })
}