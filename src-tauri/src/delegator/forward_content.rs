use serde::{Deserialize, Serialize};


#[derive(Debug, Deserialize, Serialize)]
pub enum Method {
    GET,
    POST,
}


#[derive(Debug, Deserialize, Serialize)]
pub struct RequestAttrs {
    pub method: Method,
    pub path: String,
    pub content: String
}


#[derive(Debug, Serialize)]
pub struct ResponseAttrs<T> {
    pub content: T
}