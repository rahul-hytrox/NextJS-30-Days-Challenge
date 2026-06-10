import NavBar from './NavBar';

export default function ActiveLinkHome() {
    return (
        <div className="p-6">
            <NavBar />
            <h1 className="text-2xl font-bold">🏠 Home Page</h1>
            <p>Current route is highlighted in navbar.</p>
        </div>
    );
}