import React from 'react'

function InformationPage() {
    const params = new URLSearchParams(window.location.search);
    const name = params.get("name");
    const body = params.get("body");
    const emails=params.get("email");
    return (
    <div><h1>name</h1>{name}<br />
         <h1>body</h1>{body}<br />
         <h1>email</h1>{emails}
    </div>
  )
}

export default InformationPage