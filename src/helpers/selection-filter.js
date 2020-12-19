export default function selectionFilter({series, films}) {
    return {
        series: [
            {
                title: 'Документальные',
                data: series.filter(item => item.genre === 'documentaries')
            },
            {
                title: 'Комедии',
                data: series.filter(item => item.genre === 'comedies')
            },
            {
                title: 'Детское',
                data: series.filter(item => item.genre === 'children')
            },
            {
                title: 'Криминальное',
                data: series.filter(item => item.genre === 'crime')
            },
            {
                title: 'Успокаивающее',
                data: series.filter(item => item.genre === 'feel-good')
            },
        ],
        films: [
            {
                title: 'Драмма',
                data: films.filter(item => item.genre === 'drama')
            },
            {
                title: 'Триллеры',
                data: films.filter(item => item.genre === 'thriller')
            },
            {
                title: 'Детское',
                data: films.filter(item => item.genre === 'children')
            },
            {
                title: 'Остросюжетное',
                data: films.filter(item => item.genre === 'suspense')
            },
            {
                title: 'Романы',
                data: films.filter(item => item.genre === 'romance')
            },
        ],

    }
}