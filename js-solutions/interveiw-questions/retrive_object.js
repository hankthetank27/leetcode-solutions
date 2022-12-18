const filterObjList = array => {

  const isStrArray = item => {
    if (!Array.isArray(item)) return false
    for (const el of item){
      if (typeof el !== 'string') return false
    }
    return true
  }

  return array.filter(obj => {
    let foundName = false
    let foundAge = false
    let foundHouses = false
    for (const [key, value] of Object.entries(obj)){
      if (key === 'name'){
        if (foundName || typeof value !== 'string') return false
        foundName = true
      } else if (key === 'age') {
        if (foundAge || typeof value !== 'number') return false
        foundAge = true
      } else if (key === 'houses') {
        if (foundHouses || !isStrArray(value)) return false
        foundHouses = true
      } else {
        if (typeof value !== 'string') return false
      }
    }
    return foundName && foundAge
  })

}

// {
//   name: String
//   age: Number
//   ?houses: string[]
//   {[k: string] : string}
// }

const testArr = [
  {name: 'hank', age: 16, other: 'hi'}, {name: 17, age: 16, other: 'sdf', other2: '12'}, {name: 'hen', age: 12, other: 89}, {name: 'asdf', age: 90}, {name: 'jack', age: 23, houses: ['ny', 'la']}, {name: 'jack', age: 23, houses: ['ny', 12]}, {age: 15, houses: ['asdf']}
]

console.log(filterObjList(testArr))