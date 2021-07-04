import Board from "../components/MainPage/Board";

function MainPage() {
  return (
    <section className="mx-auto container p-10" style={{width:"1000px"}}>
      <header>
      <p className="text-gray-500 text-2xl text-center my-10">게시물을 검색해보세요</p>
      </header>
      <main>
        <Board/>
      </main>  
    </section>
  );
}

export default MainPage;
