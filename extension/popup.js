//uvicorn main:app

// async function transfer () {
//   var tablink;

//   chrome.tabs.getSelected(null, async function (tab) {
//     const original_url = tab.url
//     tablink = tab.url;
//     if (tablink.length > 30) {
//       tablink = tablink.slice(0, 30) + ' ...';
//     }
//     $('#site').text(tablink);
    
    
//     // var xhttp = new XMLHttpRequest();
//     //   xhttp.onreadystatechange = function() {
//     //       if (this.readyState == 4 && this.status == 200) {
//     //         if (xhttp.responseText == 'false') {
              
//     //         }
//     //       }
//     //   };
//     // xhttp.open("GET", "http://localhost:8000/isrunning");
//     // xhttp.send();
  
//   // await fetch('http://localhost:8000/isrunning')
//   // .then((response) =>  {
//   //   console.log(response.text) 
//   //       $('#div1').text(response.text);
//   //      }
//   //   )

  


//   // fetch(`http://localhost:8000/predict/URL=${original_url}`)
//   // .then((response) => {
//   //   if (response.body === 'benign') {
//   //           $('#div1').text(xhr.responseText);
//   //         } else {
//   //           $('#div1').text(xhr.responseText);
//   //         }
//   //         return response.body
//   // })

  
//   var xhr = new XMLHttpRequest();
//   params = 'url=' + original_url;
//   xhr.open('GET', `http://localhost:8000/predict/url=${original_url}`, true);
//   xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
//   xhr.onload = () => {
//     if (xhr.responseText === 'benign') {
//       $('#div1').text(xhr.responseText);
//     } else {
//       $('#div1').text(xhr.responseText);
//     }
//     return xhr.responseText;
//   };
//   xhr.send();
// }

async function transfer() {
  var tablink;

  await chrome.tabs.getSelected(null, async function (tab) {
    const original_url = tab.url
    tablink = tab.url;
    if (tablink.length > 30) {
      tablink = tablink.slice(0, 30) + ' ...';
    }
    $('#site').text(tablink);

    BASEURL = "http://localhost:8000"
    let response;
    let text;
    // response = await fetch(BASEURL+"/isrunning")
    // text = await response.text()
    // console.log(text)

    // if (text == "false") {
    //   await fetch(BASEURL + "/retrain",)
    //   $('#div1').text("retrainig");
    // } else {
    //   $('#div1').text("no");
    // }

    response = await fetch(BASEURL+`/predict?url=${original_url}`)
    text = await response.json()
    if (text.result === "benign") {
      $('#div2').text("");
      $('#div1').text(text.result);
    } else {
      $('#div1').text("");
      $('#div2').text(text.result);
    }

    

    // var xhr = new XMLHttpRequest();
    // params = 'url=' + original_url;

    // var markup =
    //   'url=' + original_url + '&html=' + document.documentElement.innerHTML;
    // xhr.open('POST', 'http://localhost:8000', true);
    // xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    // xhr.onload = () => {
    //   if (xhr.responseText === 'SAFE') {
    //     $('#div1').text(xhr.responseText);
    //   } else {
    //     $('#div2').text(xhr.responseText);
    //   }
    //   return xhr.responseText;
    // };
    // xhr.send(markup);
  });
}

$(document).ready(function () {
  $('button').click(async function () {
    await transfer();
  });
});

chrome.tabs.getSelected(null, function (tab) {
  var tablink = tab.url;
  if (tablink.length > 30) {
    tablink = tablink.slice(0, 30) + ' ....';
  }
  $('#site').text(tablink + '\n\n');
});
