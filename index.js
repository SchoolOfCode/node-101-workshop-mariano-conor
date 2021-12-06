let myCollection = [
    {
      name: "School of Code mug",
      count: 1,
      whatILike: "It has my cute pixel character on it!"
    },
    {
      name: "School of Code hat",
      count: 2,
      whatILike: "An often overlooked fashion accessory"
    },
    {
      name: "School of Code pillow",
      count: 1,
      whatILike: "Eat. Sleep. Code. Repeat :)"
    }
  ];

  console.log(myCollection);

function describeItem(item){
    if(item.count === 1){
        console.log(`we have ${item.name}`)
    } else {
        console.log(`we have ${item.count} ${item.name}s`)
    }
    
}


describeItem(myCollection[1])
