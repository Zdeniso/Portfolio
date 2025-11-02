export default function HomePageContent() {
  return (
    <main className="home-page-content">
        <h1>Find events around you</h1>
        <p>Browse more than <span>10.000 events</span> worldwide</p>
        <input 
            type="text" 
            placeholder="Search events in any city..." />
        <div className="popular-search-keys">
            <p>Popular :</p>
            <ul>
                <li>Austin</li>
                <li>Seatle</li>
            </ul>
        </div>
    </main>
  )
}
