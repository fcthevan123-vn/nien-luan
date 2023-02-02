import ItemCard from "./ItemCard";
function ListBook() {
  return (
    <div class="container text-center my-5">
      <div class="row">
        {/* item card */}
        <ItemCard></ItemCard>
        <ItemCard></ItemCard>
        <ItemCard></ItemCard>
        <ItemCard></ItemCard>
      </div>
    </div>
  );
}

export default ListBook;
