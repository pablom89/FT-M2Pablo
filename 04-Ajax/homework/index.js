//var lista = $("#lista");

// //Get all


// $("#boton").click(function () {
//     lista.empty();
//     $.get("http://localhost:5000/amigos", function(data, status){
//     if(status === 'success'){
//         console.log(data);
//         data.forEach(element => lista.append(
//             '<li>'+element.name+'</li>'
//         ));
//     }
//   });
// });


// var lista = document.getElementById("lista");
// var button = document.getElementById("boton");
// button.onclick = function () {
//   document.getElementById("lista").innerHTML="";
//   var lista = document.getElementById("lista");
//   fetch("http://localhost:5000/amigos")
//     .then((res) => res.json())
//     .then((res) =>
//       res.forEach((element) => {
//           let el = document.createElement('li');
//           el.innerHTML = element.name;
//           lista.append(el);
//       }
//     ))
// };

var lista = document.getElementById("lista");
var button = document.getElementById("boton");
button.onclick = async function () {
  document.getElementById("lista").innerHTML="";
  var lista = document.getElementById("lista");
  const resServer = await fetch("http://localhost:5000/amigos");
  const resJson = await resServer.json();
  resJson.forEach((element) => {
          let el = document.createElement('li');
          el.innerHTML = element.name;
          lista.append(el);
      })
}



//Get by id


// $("#search").click(function () {
//   var id = $("#input").val();

//   $.get(`http://localhost:5000/amigos/${id}`, function (data, status) {
//     if (status === "success") {
//       $("#amigo").text(data.name);
//     }
//   });
// });

var input = document.getElementById("input").addEventListener('change', (e) => {
    id = e.target.value;
}), id;
var busqueda = document.getElementById("search");
var amigo = document.getElementById("amigo");
busqueda.onclick = function () {
  fetch("http://localhost:5000/amigos/" + id)
    .then((res) => res.json())
    .then((res) => amigo.innerHTML= res.name)
};

//Delete by id
// $("#delete").click(function () {
//   var id = $("#inputDelete").val();
//   $.ajax({
//     url: `http://localhost:5000/amigos/${id}`,
//     type: "DELETE",
//     success: function (result) {
//       $("#sucess").text("Amigo borrado con éxito!");
//     },
//   });
// });

var borrar = document.getElementById('delete');
borrar.onclick= function (){
    var id = document.getElementById('inputDelete').value;
    fetch(`http://localhost:5000/amigos/${id}`,{
        method: 'DELETE', // or 'PUT
    }).then(res => res.json()).then(document.getElementById('sucess').innerHTML= "Amigo borrado con éxito!");
}

//Post

// $("#agregarAmigo").click(function () {
//   event.preventDefault();
//   var nombre = $("#agregar").val();
//   var data = {
//     name: `${nombre}`,
//     age: "30",
//     email: `${nombre}@henry.com`,
//   };
//   console.log(data);

  // $.post(`http://localhost:5000/amigos`, data, function(data, status){
  //     if(status === 'success'){
  //         console.log(data);
  //     }
  //   } );

  // $.ajax({
  //     url: `http://localhost:5000/amigos`,
  //     type: 'POST',
  //     body: JSON.stringify(data),
  //     contentType: 'application/json',
  //     headers:{
  //         dataType: 'application/json',
  //     },
  //     success: function(result) {
  //         $("#agregado").text('Amigo agregado con éxito!' + result);
  //         console.log(result);
  //     }
  // });


//});
