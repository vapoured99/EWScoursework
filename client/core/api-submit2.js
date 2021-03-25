const create = async (submit2) => {
    try {
        let response = await fetch('/submitbutton/submit/', {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(submit2)
        })
      return await response.json()
    } catch(err) {
      console.log(err)
    }
  }
  
 



  const list2 = async (signal) => {
    console.log("listing the users")
    try {
      let response = await fetch('/selector/submit2/submit2', {
        method: 'GET',
        signal: signal,
      })
      return await response.json()
    } catch(err) {
      console.log(err)
    }
  }
  
  
  export {
    create as create2,
    list2
  }