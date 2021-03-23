const axios = require('axios')
const cheerio = require('cheerio')
const express = require('express')

//  get AnyPage
async function getAnyPage() {
    try {
        const siteUrl = 'https://github.com/search?q=python'

        const  data  = await axios({
            method: "GET",
            url: siteUrl,
        })
        
      console.log(data.data)
    } catch (err) {
      console.log(err);
    }
}
getAnyPage()


