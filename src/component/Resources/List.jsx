const List = (Props) => {
    let Items = ['I’m an item. ​Click here to edit me.','I’m an item. ​Click here to edit me.','I’m an item. ​Click here to edit me.'];
  return (
    <div className="p-3">
    <h1 className="text-3xl font-semibold py-3">{Props.name}</h1>
    <ul className="list-disc">
        {
            Items.map((Item,index)=>{
                return (<li key = {index}>{Item}</li>)
            })

        }
    </ul>
    </div>
  );
};

export default List;
