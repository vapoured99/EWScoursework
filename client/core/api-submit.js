const create = async (submit) => {
    try {
        let response = await fetch('/submitbutton/submit/', {
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
  
  const update = async (res) => {
    try {
      user.buttonclicks = user.buttonclicks + 1
      await user.save()
      res.json(user)
    } catch (err) {
      return res.status(400).json({
        error: errorHandler.getErrorMessage(err)
      })
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
    list,
    update
  }