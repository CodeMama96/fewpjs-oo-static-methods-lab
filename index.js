class Formatter {

  static capitalize (string){
    return string.charAt(0).toUpperCase() + string.slice(1);
}


  static sanitize(){
    // return remove all non-alphaumeric characters except (/, '', " ")
  }

  static titleize(string){
    //titleCase 
    return string.replace(/\b\w/g, l => l.toUpperCase())
    //const exception = ("the", "a", "an", "but", "of", "and", "for", "at", "by", "from")
    //exception.ignore?
  }
}