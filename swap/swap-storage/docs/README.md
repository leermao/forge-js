
## SwapStorage

**Kind**: global class  

* [SwapStorage](#SwapStorage)
  * [new SwapStorage(options)](#new_SwapStorage_new)
  * [create(traceId, initialAttributes)](#SwapStorage+create) ⇒ `Promise.<object>`
  * [read(traceId)](#SwapStorage+read) ⇒ `Promise.<object>`
  * [update(traceId, updates)](#SwapStorage+update) ⇒ `Promise.<object>`
  * [finalize(traceId, payload)](#SwapStorage+finalize) ⇒ `Promise.<object>`
  * [listByStatus(status)](#SwapStorage+listByStatus) ⇒ `Promise.<Array>`
  * [listByOfferAddress(address, \[status\])](#SwapStorage+listByOfferAddress) ⇒ `Promise.<Array>`
  * [listByDemandAddress(address, \[status\])](#SwapStorage+listByDemandAddress) ⇒ `Promise.<Array>`
  * [delete(traceId)](#SwapStorage+delete) ⇒

### new SwapStorage(options)

Creates an instance of SwapStorage.

| Param   | Type     |
| ------- | -------- |
| options | `object` |

### swapStorage.create(traceId, initialAttributes) ⇒ `Promise.<object>`

Create new atomic-swap order, traceId should be generated by user

**Kind**: instance method of [`SwapStorage`](#SwapStorage)  

| Param             | Type     |
| ----------------- | -------- |
| traceId           | `string` |
| initialAttributes | `object` |

### swapStorage.read(traceId) ⇒ `Promise.<object>`

Get an atomic-swap order by traceId

**Kind**: instance method of [`SwapStorage`](#SwapStorage)  
**Returns**: `Promise.<object>` - the atomic-swap-order  

| Param   | Type     | Description                |
| ------- | -------- | -------------------------- |
| traceId | `string` | the uuid of the swap order |

### swapStorage.update(traceId, updates) ⇒ `Promise.<object>`

Update the status of an atomic-swap order, will not allow payload fields to be updated

**Kind**: instance method of [`SwapStorage`](#SwapStorage)  

| Param   | Type     |
| ------- | -------- |
| traceId | `string` |
| updates | `object` |

### swapStorage.finalize(traceId, payload) ⇒ `Promise.<object>`

Finalize the payload of atomic-swap

**Kind**: instance method of [`SwapStorage`](#SwapStorage)  

| Param   | Type     |
| ------- | -------- |
| traceId | `string` |
| payload | `object` |

### swapStorage.listByStatus(status) ⇒ `Promise.<Array>`

Find atomic swap records by status

**Kind**: instance method of [`SwapStorage`](#SwapStorage)  
**Returns**: `Promise.<Array>` - TODO: add pagination for this  

| Param  | Type     | Description                             |
| ------ | -------- | --------------------------------------- |
| status | `string` | check out list of supported status here |

### swapStorage.listByOfferAddress(address, [status]) ⇒ `Promise.<Array>`

Find atomic swap records by offer address and status

**Kind**: instance method of [`SwapStorage`](#SwapStorage)  
**Returns**: `Promise.<Array>` - TODO: add pagination for this  

| Param    | Type     | Default                    |
| -------- | -------- | -------------------------- |
| address  | `string` |                            |
| [status] | `string` | `&quot;&#x27;&#x27;&quot;` |

### swapStorage.listByDemandAddress(address, [status]) ⇒ `Promise.<Array>`

Find atomic swap records by demand address and status

**Kind**: instance method of [`SwapStorage`](#SwapStorage)  
**Returns**: `Promise.<Array>` - TODO: add pagination for this  

| Param    | Type     | Default                    |
| -------- | -------- | -------------------------- |
| address  | `string` |                            |
| [status] | `string` | `&quot;&#x27;&#x27;&quot;` |

### swapStorage.delete(traceId) ⇒

Delete atomic swap order by traceId

**Kind**: instance method of [`SwapStorage`](#SwapStorage)  
**Returns**: void  

| Param   | Type     |
| ------- | -------- |
| traceId | `string` |


## Contributors

| Name           | Website                    |
| -------------- | -------------------------- |
| **wangshijun** | <https://ocap.arcblock.io> |