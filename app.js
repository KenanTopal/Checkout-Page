const removeCartItem = document.getElementsByTagName('button');
for(let i = 0; i< removeCartItem.length; i++){
  const button = removeCartItem[i]
  button.addEventListener('click', function(e){
    alert('bak kaldiriyom hehehe')
    const buttonClicked = e.target;
    buttonClicked.parentElement.parentElement.parentElement.remove()
  })
}