import "./globals.css";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <header>
          <h1>Education Management</h1>
          <nav>
            <a href="/teachers">Teachers</a>
            <a href="/students">Students</a>
            <a href="/teachers/add-teacher">Add Teacher</a>
          </nav>
        </header>
        <main>{children}</main>
        <footer>
          <p>&copy; 2025 Education System</p>
        </footer>
      </body>
    </html>
  );
}
