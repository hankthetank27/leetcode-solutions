function isValid(stale, latest, otjson) {
    // this is the part you will write!
    let newString = stale;
    let cursor = 0;
    operations = JSON.parse(otjson);
    
    for (const operation of operations) {
      
      const { op, count, chars } = operation;
      
      if (op === 'skip'){
        cursor += count; 
      };
      if (op === 'insert'){
        newString = newString.slice(0, cursor) + chars + newString.slice(cursor + count);
        cursor += chars.length;
      };
      if (op === 'delete'){
        newString = newString.slice(0, cursor) + newString.slice(cursor + count);
      };
      if (cursor > newString.length){
        return false; 
      };
    };
    console.log()
    return latest === newString;
  };
  
  console.log(isValid(
    'Repl.it uses operational transformations to keep everyone in a multiplayer repl in sync.',
    'Repl.it uses operational transformations.',
    '[{"op": "skip", "count": 40}, {"op": "delete", "count": 47}]'
  )); // true
  
  console.log(isValid(
    'Repl.it uses operational transformations to keep everyone in a multiplayer repl in sync.',
    'Repl.it uses operational transformations.',
    '[{"op": "skip", "count": 45}, {"op": "delete", "count": 47}]'
  )); // false, delete past end
  
  console.log(isValid(
    'Repl.it uses operational transformations to keep everyone in a multiplayer repl in sync.',
    'Repl.it uses operational transformations.',
    '[{"op": "skip", "count": 40}, {"op": "delete", "count": 47}, {"op": "skip", "count": 2}]'
  )); // false, skip past end
  
  console.log(isValid(
    'Repl.it uses operational transformations to keep everyone in a multiplayer repl in sync.',
    'We use operational transformations to keep everyone in a multiplayer repl in sync.',
    '[{"op": "delete", "count": 7}, {"op": "insert", "chars": "We"}, {"op": "skip", "count": 4}, {"op": "delete", "count": 1}]'
  )); // true
    
  console.log(isValid(
    'Repl.it uses operational transformations to keep everyone in a multiplayer repl in sync.',
    'We can use operational transformations to keep everyone in a multiplayer repl in sync.',
    '[{"op": "delete", "count": 7}, {"op": "insert", "chars": "We"}, {"op": "skip", "count": 4}, {"op": "delete", "count": 1}]'
  )); // false
  
  console.log(isValid(
    'Repl.it uses operational transformations to keep everyone in a multiplayer repl in sync.',
    'Repl.it uses operational transformations to keep everyone in a multiplayer repl in sync.',
    '[]'
  )); // true