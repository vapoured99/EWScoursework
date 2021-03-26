const create = async (submit) => {
    try {
        let response = await fetch('/selector/submit', {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(submit)
        })
      return await response.json()
    } catch(err) {
      console.log(err)
    }
  }



  const list = async (signal) => {
    console.log("listing the users")
    try {
      let response = await fetch('/submitbutton/submit/submitpage', {
        method: 'GET',
        signal: signal,
      })
      return await response.json()
    } catch(err) {
      console.log(err)
    }
  }
  
  
  export {
    create,
    list
  }