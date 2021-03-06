
## [**@arcblock/forge-config**](https://github.com/arcblock/forge-config)

Contains helper methods to parse forge config

### parse(configPath) ⇒ `object`

Parse config from a standard forge release configuration file

**Kind**: static method  
**Throws**:

* Error when file not found

**Access**: public  

| Param      | Type     |
| ---------- | -------- |
| configPath | `string` |

**Example**  

```js
const { parse } = require('@arcblock/forge-config');
const config = parse('./forge.toml');
```
