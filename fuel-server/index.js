const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 5000
const fs = require('fs')

const recordDirectory = __dirname + '/records.json'
const fuelApp = '/home/joel/Documents/Fuel_Record/fuel-app/build'

app.use(bodyParser.json())
app.use(express.static(fuelApp))

app.get('/', (req, res) => {
    res.sendFile(fuelApp + '/index.html')
})

app.get('/records', (req, res) => {
    res.sendFile(recordDirectory)
})

app.post('/post', (req, res) => {
    const { add, item } = req.body
    // console.log(add)
    // console.log(item)
    let rawFile = fs.readFileSync(recordDirectory)
    let fileRecords = JSON.parse(rawFile)
    // Adding the record to the file
    if (add) {
        console.log("This is before the add")
        console.log(fileRecords.records)
        // Add the item to the json array\
        var index = 0
        for (i = 0; i <= fileRecords.records.length; i++) {
            if (i === fileRecords.records.length) {
                index = i
                break
            }
            let check = Date.parse(fileRecords.records[i].id) < Date.parse(item.id)
            console.log('Checking Date: ' + check)
            if (check) {
                index = i
                break
            }
        }
        // fileRecords.records.some((value, i) => {
        //     let check = Date.parse(value.id) < Date.parse(item.id)
        //     console.log('Checking Date: ' + check)
        //     if (check) {
        //         index = i
        //     }
        // });
        console.log('Adding item at: ' + index);
        fileRecords.records.splice(index, 0, item)
        // Write the json array back to the file
        let data = JSON.stringify(fileRecords, null, 2)
        fs.writeFileSync('records.json', data)
    }
    // Removing a record from the file
    else {
        console.log("Tried to remove:")
        console.log(item)
        const index = fileRecords.records.map(e => e.id).indexOf(item.id)
        console.log("Index to delete is: " + index)
        if (index > -1) fileRecords.records.splice(index, 1)
        let data = JSON.stringify(fileRecords, null, 2)
        fs.writeFileSync('records.json', data)
    }
    res.sendStatus(200)
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
