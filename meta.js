       // File system data structure with full paths
       const fileSystem = {
        home: {
            name: "Home",
            path: "er.vivekratan/",
            /*folders: [],*/
            folders: ["Document", "Pictures", "Music", "Videos", "Downloads", "Krishi-Mitra", "Epily", "Python-Projects", "Tic-Tac-Toe", "AI-Sudukoo", "HTML-CSS-JS-Projects"],
            files: [
                { name: "notes.txt", type: "document", size: "2 KB", modified: "2022-03-17T10:30:00" },
                { name: "resume.pdf", type: "pdf", size: "256 KB", modified: "2025-03-11T10:30:00" },
                { name: "script.js", type: "code", size: "4 KB", modified: "2 days ago" },
                { name: "styles.css", type: "code", size: "8 KB", modified: "2 days ago" },
                { name: "index.html", type: "code", size: "12 KB", modified: "2 days ago" }
            ]
        },
        "Document": {
            name: "Documents",
            path: "er.vivekratan/Documents",
            folders: ["Work", "Personal"],
            files: [
                { name: "contract.docx", type: "document", size: "1.1 MB", modified: "2 weeks ago" },
                { name: "meeting_notes.docx", type: "document", size: "1.5 MB", modified: "4 days ago" }
            ]
        },
        "Pictures": {
            name: "Pictures",
            path: "er.vivekratan/Pictures",
            folders: ["Vacation", "Family"],
            files: [
                { name: "sunset.jpg", type: "image", size: "3.2 MB", modified: "2025-03-17T10:30:00" },
                { name: "profile_pic.png", type: "image", size: "1.8 MB", modified: "2025-03-17T10:30:00" }
            ]
        },
        "Music": {
            name: "Music",
            path: "er.vivekratan/Music",
            folders: [],
            files: [
                { name: "favorite_song.mp3", type: "audio", size: "3.8 MB", modified: "5 days ago" }
            ]
        },
        "Videos": {
            name: "Videos",
            path: "er.vivekratan/Videos",
            folders: [],
            files: [
                { name: "how_to_use.mp4", type: "video", size: "45 MB", modified: "2 months ago" },
                { name: "travel_vlog.mp4", type: "video", size: "120 MB", modified: "1 month ago" }
            ]
        },
        "Downloads": {
            name: "Downloads",
            path: "er.vivekratan/Downloads",
            folders: [],
            files: [
                { name: "setup.exe", type: "executable", size: "45 MB", modified: "5 days ago" },
                { name: "ebook.pdf", type: "pdf", size: "12 MB", modified: "1 week ago" }
            ]
        },
        "Work": {
            name: "Work",
            path: "er.vivekratan/Documents/Work",
            folders: [],
            files: [
                { name: "report.docx", type: "document", size: "2.5 MB", modified: "3 days ago" }
            ]
        },
        "Personal": {
            name: "Personal",
            path: "er.vivekratan/Documents/Personal",
            folders: [],
            files: [] // Empty folder for testing
        },
        "Vacation": {
            name: "Vacation",
            path: "er.vivekratan/Pictures/Vacation",
            folders: [],
            files: [] // Empty folder for testing
        },
        "Krishi-Mitra": {
            name: "Krishi-Mitra",
            path: "er.vivekratan/Krishi-Mitra",
            folders: [],
            files: [] // Empty folder for testing
        },
        "Epily": {
            name: "Epily",
            path: "er.vivekratan/Epily",
            folders: [],
            files: [] // Empty folder for testing
        },
        "Python-Projects": {
            name: "Python-Projects",
            path: "er.vivekratan/Python-Projects",
            folders: [],
            files: [
                { name: "calculator.py", type: "code", size: "2 KB", modified: "1 week ago" },
                { name: "web_scraper.py", type: "code", size: "5 KB", modified: "2 weeks ago" }
            ]
        },
        "Tic-Tac-Toe": {
            name: "Tic-Tac-Toe",
            path: "er.vivekratan/Tic-Tac-Toe",
            folders: [],
            files: [
                { name: "game.py", type: "code", size: "3 KB", modified: "1 week ago" },
                { name: "README.md", type: "markdown", size: "1 KB", modified: "2 weeks ago" }
            ]
        },
        "AI-Sudukoo": {
            name: "AI-Sudukoo",
            path: "er.vivekratan/AI-Sudukoo",
            folders: [],
            files: [
                { name: "sudoku_solver.py", type: "code", size: "4 KB", modified: "1 week ago" },
                { name: "sudoku_generator.py", type: "code", size: "3 KB", modified: "2 weeks ago" }
            ]
        },
        "HTML-CSS-JS-Projects": {
            name: "HTML-CSS-JS-Projects",
            path: "er.vivekratan/HTML-CSS-JS-Projects",
            folders: [],
            files: [
                { name: "portfolio.html", type: "code", size: "5 KB", modified: "1 week ago" },
                { name: "calculator.html", type: "code", size: "4 KB", modified: "2 weeks ago" }
            ]
        },
    };


