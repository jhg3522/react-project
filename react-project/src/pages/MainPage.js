import Search from "../components/MainPage/Search";
import Board from "../components/MainPage/Board";
function MainPage() {
    
    return (
    <section className="mx-auto container p-10" style={{width:"1000px"}}>
      <header>
      <h1 className="text-gray-500 text-xl text-center my-10">게시물을 검색해보세요</h1>
      </header>
      <main>
        <Search/>
        <Board/>
      </main>  
    </section>
  );
}

export default MainPage;
