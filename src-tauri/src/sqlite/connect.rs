use once_cell::sync::Lazy;
use rusqlite::{Connection, OpenFlags};
use std::sync::Mutex;
use std::{thread, time::Duration};

pub static DB: Lazy<Mutex<Connection>> = Lazy::new(|| {
    let mut attempts = 0;
    let max_attempts = 5;
    let delay = Duration::from_millis(500);

    loop {
        match Connection::open_with_flags(
            "/home/fa064152/.config/beekeeper-studio/demo.db",
            OpenFlags::SQLITE_OPEN_READ_WRITE |
            OpenFlags::SQLITE_OPEN_CREATE |
            OpenFlags::SQLITE_OPEN_FULL_MUTEX, // important for thread-safety
        ) {
            Ok(conn) => {
                println!("Connected to SQLite successfully.");
                break Mutex::new(conn);
            }
            Err(e) => {
                attempts += 1;
                eprintln!("Attempt {}/{}: Failed to connect to SQLite: {}", attempts, max_attempts, e);
                if attempts >= max_attempts {
                    panic!("Failed to connect to SQLite after {} attempts: {}", max_attempts, e);
                }
                thread::sleep(delay);
            }
        }
    }
});
