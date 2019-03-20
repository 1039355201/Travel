export default{
  
    getHomeCityName(state,cityName){
      state.city = cityName;
      try {
        window.localStorage.setItem('city', state.city);
      } catch (e) { }
    } ,  
  
}
