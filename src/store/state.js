var defaultCity ="上海"
try{
  if (window.localStorage.getItem('city')){
    defaultCity = window.localStorage.getItem('city')
  }
}catch(e){}
export default{
  city: defaultCity,
  
}
