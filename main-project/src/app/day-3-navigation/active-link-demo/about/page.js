import NavBar from '../NavBar';

export default function About() {
    return (
        <div className="p-6">
            <NavBar />
            <h1 className="text-2xl font-bold">📄 About Page</h1>
            <p>Notice the "About" link is highlighted.</p>
        </div>
    );
}