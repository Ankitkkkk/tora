use tauri::command;

use super::forward_content::{RequestAttrs, ResponseAttrs};
use super::path_config::PATHS;

#[command]
pub fn chain(request: RequestAttrs) -> String {
    // let json_str = serde_json::to_string(&request).unwrap_or_else(|_| "{}".to_string());

    for (path, func) in PATHS.iter() {
        if *path == request.path {
            return func(&request).expect("cannot process the request");
        }
    }

    String::from("n-content")
}

