use serde::Serialize;

use crate::delegator::forward_content::ResponseAttrs;

use super::errors::Result;

pub fn response<T>(result: T) -> Result<String> where T: Serialize, {
    Ok(serde_json::to_string(&ResponseAttrs { content: result })?)
}