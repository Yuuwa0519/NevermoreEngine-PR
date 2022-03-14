"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[41119],{49835:function(e){e.exports=JSON.parse('{"functions":[{"name":"new","desc":"Constructs a new RobloxApiClass. See [RobloxApiDump.PromiseClass] to actually construct\\nthis class.","params":[{"name":"robloxApiDump","desc":"","lua_type":"RobloxApiDump"},{"name":"data","desc":"","lua_type":"table"}],"returns":[{"desc":"","lua_type":"RobloxApiClass"}],"function_type":"static","source":{"line":22,"path":"src/roblox-api-dump/src/Server/RobloxApiClass.lua"}},{"name":"GetRawData","desc":"Retrieves the raw class data","params":[],"returns":[{"desc":"","lua_type":"table"}],"function_type":"method","source":{"line":50,"path":"src/roblox-api-dump/src/Server/RobloxApiClass.lua"}},{"name":"GetClassName","desc":"Gets the class name.","params":[],"returns":[{"desc":"","lua_type":"string"}],"function_type":"method","source":{"line":58,"path":"src/roblox-api-dump/src/Server/RobloxApiClass.lua"}},{"name":"GetMemberCategory","desc":"Gets the class category.","params":[],"returns":[{"desc":"","lua_type":"string?"}],"function_type":"method","source":{"line":67,"path":"src/roblox-api-dump/src/Server/RobloxApiClass.lua"}},{"name":"PromiseSuperClass","desc":"Retrieves the super class, or rejects.","params":[],"returns":[{"desc":"","lua_type":"Promise<RobloxApiClass>"}],"function_type":"method","source":{"line":75,"path":"src/roblox-api-dump/src/Server/RobloxApiClass.lua"}},{"name":"PromiseIsA","desc":"Returns a promise that resolves whether this class is of a specific type.","params":[{"name":"className","desc":"","lua_type":"string"}],"returns":[{"desc":"","lua_type":"Promise<boolean>"}],"function_type":"method","source":{"line":89,"path":"src/roblox-api-dump/src/Server/RobloxApiClass.lua"}},{"name":"PromiseIsDescendantOf","desc":"Returns a promise that resolves whether this class is a descendant of another\\nspecific class.","params":[{"name":"className","desc":"","lua_type":"string"}],"returns":[{"desc":"","lua_type":"Promise<boolean>"}],"function_type":"method","source":{"line":104,"path":"src/roblox-api-dump/src/Server/RobloxApiClass.lua"}},{"name":"PromiseAllSuperClasses","desc":"Returns a promise that resolves to all super classes.","params":[],"returns":[{"desc":"","lua_type":"Promise<{ RobloxApiClass }>"}],"function_type":"method","source":{"line":120,"path":"src/roblox-api-dump/src/Server/RobloxApiClass.lua"}},{"name":"GetSuperClassName","desc":"Returns the super class name","params":[],"returns":[{"desc":"","lua_type":"string?"}],"function_type":"method","source":{"line":147,"path":"src/roblox-api-dump/src/Server/RobloxApiClass.lua"}},{"name":"HasSuperClass","desc":"Returns whether the class has a super class","params":[],"returns":[{"desc":"","lua_type":"boolean"}],"function_type":"method","source":{"line":160,"path":"src/roblox-api-dump/src/Server/RobloxApiClass.lua"}},{"name":"PromiseMembers","desc":"Retrieves all class members (events, properties, callbacks, functions).","params":[],"returns":[{"desc":"","lua_type":"Promise<{ RobloxApiMember }>"}],"function_type":"method","source":{"line":168,"path":"src/roblox-api-dump/src/Server/RobloxApiClass.lua"}},{"name":"PromiseProperties","desc":"Gets all class properties.","params":[],"returns":[{"desc":"","lua_type":"Promise<{ RobloxApiMember }>"}],"function_type":"method","source":{"line":176,"path":"src/roblox-api-dump/src/Server/RobloxApiClass.lua"}},{"name":"PromiseEvents","desc":"Gets all class events.","params":[],"returns":[{"desc":"","lua_type":"Promise<{ RobloxApiMember }>"}],"function_type":"method","source":{"line":193,"path":"src/roblox-api-dump/src/Server/RobloxApiClass.lua"}},{"name":"PromiseFunctions","desc":"Gets all class functions (i.e. methods).","params":[],"returns":[{"desc":"","lua_type":"Promise<{ RobloxApiMember }>"}],"function_type":"method","source":{"line":210,"path":"src/roblox-api-dump/src/Server/RobloxApiClass.lua"}},{"name":"IsService","desc":"Retrieves whether the class is a service","params":[],"returns":[{"desc":"","lua_type":"boolean"}],"function_type":"method","source":{"line":227,"path":"src/roblox-api-dump/src/Server/RobloxApiClass.lua"}},{"name":"IsNotCreatable","desc":"Retrieves whether the class is not creatable","params":[],"returns":[{"desc":"","lua_type":"boolean"}],"function_type":"method","source":{"line":235,"path":"src/roblox-api-dump/src/Server/RobloxApiClass.lua"}},{"name":"IsNotReplicated","desc":"Retrieves whether the class is not replicated","params":[],"returns":[{"desc":"","lua_type":"boolean"}],"function_type":"method","source":{"line":243,"path":"src/roblox-api-dump/src/Server/RobloxApiClass.lua"}},{"name":"HasTag","desc":"Retrieves whether the class has a tag or not","params":[{"name":"tagName","desc":"","lua_type":"string"}],"returns":[{"desc":"","lua_type":"boolean"}],"function_type":"method","source":{"line":252,"path":"src/roblox-api-dump/src/Server/RobloxApiClass.lua"}}],"properties":[],"types":[],"name":"RobloxApiClass","desc":"Represents a specific Roblox class.","source":{"line":5,"path":"src/roblox-api-dump/src/Server/RobloxApiClass.lua"}}')}}]);