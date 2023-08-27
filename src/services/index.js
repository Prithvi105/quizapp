
export const services = {
    getSubjects : () => new Promise ((resolve, reject) => {
        setTimeout( () => {
            resolve( {
                data : [ {
                    id : 'HTML',
                    name : 'HTML'
                },
                {
                    id : 'CSS',
                    name : 'CSS'
                },
                {
                    id : 'JS',
                    name : 'JS'
                }]
            }, 1000)
        })
    })
}