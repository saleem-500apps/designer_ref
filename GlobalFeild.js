let jsplumb_workflow_test = {
		"fields": [{
			"thumbnail": "json/nodes/images/DBRestAPI.png",
			"author": "Appup Developer",
			"icon": "json/nodes/icons/DBRestAPI.png",
			"language": "en",
			"branches": "success,failure",
			"type": {
				"name": "ably-dynamic"
			},
			"material_icon": "cloud_upload",
			"workflow_tasklet_class_name": "com.appup.workflows.core.steps.ably.AblyDynamicStepExecutor",
			"help": "Ably Push Notification Step",
			"ui": [{
				"name": "channel_name",
				"label": "Channel Name",
				"id": "channel_name",
				"title": "Enter Channel Name",
				"category": "General",
				"type": "text",
				"fieldType": "input",
				"required": true
			}, {
				"name": "name",
				"label": "Notification Title",
				"id": "name",
				"title": "Enter the Notification Title",
				"category": "General",
				"type": "text",
				"fieldType": "input",
				"required": false
			}, {
				"name": "data",
				"label": "Notification Data",
				"id": "data",
				"title": "Enter the Notification Data",
				"category": "General",
				"type": "text",
				"fieldType": "input",
				"required": false
			}, {
				"name": "output_variable",
				"label": "Enter Output variable",
				"id": "output_variable",
				"title": "Enter Output variable",
				"category": "General",
				"type": "text",
				"fieldType": "input",
				"required": false
			}, {
				"name": "api_key",
				"label": "Api Key",
				"id": "api_key",
				"title": "Api Key",
				"category": "Plugins",
				"type": "text",
				"fieldType": "input",
				"required": true
			}, {
				"options": {
					"Free Marker Template": "ftl",
					"*Handlebar": "hb"
				},
				"name": "value_type",
				"label": "Type",
				"id": "value_type",
				"title": "Enter the Type",
				"category": "General",
				"type": "select",
				"fieldType": "select",
				"required": false
			}],
			"material_icon_color": "blue",
			"displayname": "Ably Dynamic Notification",
			"material_icon_bg_color": "bg_blue",
			"name": "Ably Dynamic Notification",
			"material_icon_img": "storage",
			"company": "Appup.com",
			"id": "ably_dynamic_notification_step",
			"category": "Utilities",
			"info": "Ably Push Notification step"
		}, {
			"thumbnail": "json/nodes/images/DBRestAPI.png",
			"author": "Appup Developer",
			"icon": "json/nodes/icons/DBRestAPI.png",
			"language": "en",
			"branches": "success,failure",
			"type": {
				"name": "ably"
			},
			"material_icon": "cloud_upload",
			"workflow_tasklet_class_name": "com.appup.workflows.core.steps.ably.AblyStepExecutor",
			"help": "Ably Push Notification Step",
			"ui": [{
				"name": "channel_name",
				"label": "Channel Name",
				"id": "channel_name",
				"title": "Enter Channel Name",
				"category": "General",
				"type": "text",
				"fieldType": "input",
				"required": true
			}, {
				"name": "name",
				"label": "Notification Title",
				"id": "name",
				"title": "Enter the Notification Title",
				"category": "General",
				"type": "text",
				"fieldType": "input",
				"required": false
			}, {
				"name": "data",
				"label": "Notification Data",
				"id": "data",
				"title": "Enter the Notification Data",
				"category": "General",
				"type": "text",
				"fieldType": "input",
				"required": false
			}, {
				"options": {
					"Free Marker Template": "ftl",
					"*Handlebar": "hb"
				},
				"name": "value_type",
				"label": "Type",
				"id": "value_type",
				"title": "Enter the Type",
				"category": "General",
				"type": "select",
				"fieldType": "select",
				"required": false
			}, {
				"name": "output_variable",
				"label": "Enter Output variable",
				"id": "output_variable",
				"title": "Enter Output variable",
				"category": "General",
				"type": "text",
				"fieldType": "input",
				"required": false
			}, {
				"dynamicValue": "CONFIG_NAME",
				"dynamicName": "CONFIG_NAME",
				"name": "plugin_name",
				"label": "Ably Plugin",
				"id": "plugin_name",
				"title": "Identity",
				"category": "General",
				"type": "select",
				"fieldType": "dynamicselect",
				"url": "/app/getPluginConfig/{{app_id}}/ably-plugin/",
				"required": true
			}],
			"material_icon_color": "blue",
			"displayname": "Ably Notification",
			"material_icon_bg_color": "bg_blue",
			"name": "Ably Notification",
			"material_icon_img": "storage",
			"company": "Appup.com",
			"id": "ably_notification_step",
			"category": "Utilities",
			"info": "Ably Push Notification step"
		}, {
			"name": "ActiveMQ Consumer",
			"thumbnail": "json/nodes/images/common/jsonio.png",
			"icon": "json/nodes/icons/common/jsonio.png",
			"info": "Consume messages from queue or topic.",
			"help": "ActiveMQ Consumer Step",
			"author": "Appup Team",
			"language": "en",
			"type": {
				"name": "active-mq-consumer"
			},
			"branches": "message_received,no_messages,failure",
			"workflow_tasklet_class_name": "com.appup.workflows.core.steps.activemq.consumer.ActiveMQConsumerStepExecutor",
			"ui": [{
				"dynamicValue": "CONFIG_NAME",
				"dynamicName": "CONFIG_NAME",
				"name": "plugin_name",
				"label": "ActiveMQ Plugin",
				"id": "plugin_name",
				"title": "ActiveMQ consumer plugin name",
				"category": "Settings",
				"type": "select",
				"fieldType": "dynamicselect",
				"url": "/app/getPluginConfig/{{app_id}}/active-mq/",
				"required": true
			}, {
				"options": {
					"Free Marker Template": "ftl",
					"*Handlebar": "hb"
				},
				"name": "value_type",
				"label": "Select Template",
				"id": "value_type",
				"title": "Template type",
				"category": "Settings",
				"type": "select",
				"fieldType": "select",
				"required": false
			}, {
				"options": {
					"topic": "topic",
					"*queue": "queue"
				},
				"name": "queue_or_topic",
				"label": "Select Queue or Topic",
				"id": "queue_or_topic",
				"title": "Queue or Topic",
				"category": "Settings",
				"type": "select",
				"fieldType": "select",
				"required": false
			}, {
				"label": "Destination Name",
				"category": "Settings",
				"name": "name",
				"id": "name",
				"title": "Please enter queue or topic name",
				"fieldType": "input",
				"type": "text"
			}, {
				"label": "Output Variable",
				"category": "Settings",
				"name": "output_variable",
				"id": "output_variable",
				"title": "Please enter output variable",
				"fieldType": "input",
				"type": "text"
			}],
			"material_icon_color": "blue",
			"displayname": "ActiveMQ Consumer",
			"material_icon_bg_color": "bg_blue",
			"material_icon_img": "storage",
			"company": "Appup.com",
			"id": "ActiveMQ_Consumer_Step",
			"category": "Utilities"
		}, {
			"name": "ActiveMQ Job Delete",
			"thumbnail": "json/nodes/images/common/jsonio.png",
			"icon": "json/nodes/icons/common/jsonio.png",
			"info": "ActiveMQ Job Delete step to remove jobs from ActiveMQ",
			"help": "ActiveMQ Job Delete Step",
			"author": "Appup Team",
			"language": "en",
			"type": {
				"name": "active-mq-delete"
			},
			"branches": "success,failure",
			"workflow_tasklet_class_name": "com.appup.workflows.core.steps.activemq.ActiveMQJobDeleteStepExecutor",
			"ui": [{
				"dynamicValue": "CONFIG_NAME",
				"dynamicName": "CONFIG_NAME",
				"name": "plugin_name",
				"label": "ActiveMQ Plugin",
				"id": "plugin_name",
				"title": "ActiveMQ Producer plugin name",
				"category": "Settings",
				"type": "select",
				"fieldType": "dynamicselect",
				"url": "/app/getPluginConfig/{{app_id}}/active-mq/",
				"required": true
			}, {
				"ui": [{
					"name": "key",
					"label": "Job Id",
					"id": "key",
					"title": "Enter the JobId",
					"category": "Messages",
					"type": "text",
					"fieldType": "input",
					"required": true
				}],
				"name": "job_ids",
				"label": "Settings",
				"id": "job_ids",
				"title": "",
				"category": "Messages",
				"type": "grid",
				"fieldType": "grid",
				"required": false
			}],
			"material_icon_color": "blue",
			"displayname": "ActiveMQ Job Delete",
			"material_icon_bg_color": "bg_blue",
			"material_icon_img": "storage",
			"company": "Appup.com",
			"id": "ActiveMQ_Job_Delete_Step",
			"category": "utilities"
		}, {
			"name": "ActiveMQ Producer",
			"thumbnail": "json/nodes/images/common/jsonio.png",
			"icon": "json/nodes/icons/common/jsonio.png",
			"info": "Producer to send the data to ActiveMQ brokers.",
			"help": "ActiveMQ Producer Step",
			"author": "Appup Team",
			"language": "en",
			"type": {
				"name": "active-mq-producer"
			},
			"branches": "success,failure",
			"workflow_tasklet_class_name": "com.appup.workflows.core.steps.activemq.producer.ActiveMQProducerStepExecutor",
			"ui": [{
				"dynamicValue": "CONFIG_NAME",
				"dynamicName": "CONFIG_NAME",
				"name": "plugin_name",
				"label": "ActiveMQ Plugin",
				"id": "plugin_name",
				"title": "ActiveMQ Producer plugin name",
				"category": "Settings",
				"type": "select",
				"fieldType": "dynamicselect",
				"url": "/app/getPluginConfig/{{app_id}}/active-mq/",
				"required": true
			}, {
				"options": {
					"Free Marker Template": "ftl",
					"*Handlebar": "hb"
				},
				"name": "value_type",
				"label": "Select Template",
				"id": "value_type",
				"title": "Template type",
				"category": "Settings",
				"type": "select",
				"fieldType": "select",
				"required": false
			}, {
				"ui": [{
					"name": "key",
					"label": "Message",
					"id": "key",
					"title": "Enter the Message",
					"category": "Messages",
					"type": "text",
					"fieldType": "input",
					"required": true
				}, {
					"name": "value",
					"label": "Priority",
					"id": "value",
					"title": "Enter message priority",
					"category": "Messages",
					"type": "text",
					"fieldType": "input",
					"required": true
				}],
				"name": "messages",
				"label": "Settings",
				"id": "messages",
				"title": "",
				"category": "Messages",
				"type": "grid",
				"fieldType": "grid",
				"required": false
			}, {
				"options": {
					"topic": "topic",
					"*queue": "queue"
				},
				"name": "queue_or_topic",
				"label": "Select Queue or Topic",
				"id": "queue_or_topic",
				"title": "Queue or Topic",
				"category": "Settings",
				"type": "select",
				"fieldType": "select",
				"required": false
			}, {
				"label": "Destination Name",
				"category": "Settings",
				"name": "name",
				"id": "name",
				"title": "Please enter queue or topic name",
				"fieldType": "input",
				"type": "text"
			}, {
				"options": {
					"*persistant": "2",
					"non_persistent": "1"
				},
				"name": "delivery_mode",
				"label": "Select Delivery Mode",
				"id": "delivery_mode",
				"title": "Delivery Mode",
				"category": "Settings",
				"type": "select",
				"fieldType": "select",
				"required": false
			}, {
				"label": "Schedule delay",
				"category": "More Settings",
				"name": "scheduled_delay",
				"id": "scheduled_delay",
				"title": "Please enter schedule delay in seconds",
				"fieldType": "input",
				"type": "text",
				"required": false
			}, {
				"label": "Schedule period",
				"category": "More Settings",
				"name": "scheduled_period",
				"id": "scheduled_period",
				"title": "Please enter schedule period in seconds",
				"fieldType": "input",
				"type": "text",
				"required": false
			}, {
				"label": "Schedule repeat",
				"category": "More Settings",
				"name": "scheduled_repeat",
				"id": "scheduled_repeat",
				"title": "Please enter schedule repeat times",
				"fieldType": "input",
				"type": "text",
				"required": false
			}, {
				"label": "Schedule cron",
				"category": "More Settings",
				"name": "scheduled_cron",
				"id": "scheduled_cron",
				"title": "Please enter schedule cron expression",
				"fieldType": "input",
				"type": "text",
				"required": false
			}],
			"material_icon_color": "blue",
			"displayname": "ActiveMQ Producer",
			"material_icon_bg_color": "bg_blue",
			"material_icon_img": "storage",
			"company": "Appup.com",
			"id": "ActiveMQ_Producer_Step",
			"category": "utilities"
		}, {
			"name": "ActiveMQ Producer V2",
			"thumbnail": "json/nodes/images/common/jsonio.png",
			"icon": "json/nodes/icons/common/jsonio.png",
			"info": "Producer to send the data to ActiveMQ brokers.",
			"help": "ActiveMQ Producer v2 Step",
			"author": "Appup Team",
			"language": "en",
			"type": {
				"name": "active-mq-producer-v2"
			},
			"branches": "success,failure",
			"workflow_tasklet_class_name": "com.appup.workflows.core.steps.activemq.producer.v2.ActiveMQProducerV2StepExecutor",
			"ui": [{
				"dynamicValue": "CONFIG_NAME",
				"dynamicName": "CONFIG_NAME",
				"name": "plugin_name",
				"label": "ActiveMQ Plugin",
				"id": "plugin_name",
				"title": "ActiveMQ Producer plugin name",
				"category": "Settings",
				"type": "select",
				"fieldType": "dynamicselect",
				"url": "/app/getPluginConfig/{{app_id}}/active-mq/",
				"required": true
			}, {
				"options": {
					"Free Marker Template": "ftl",
					"*Handlebar": "hb"
				},
				"name": "value_type",
				"label": "Select Template",
				"id": "value_type",
				"title": "Template type",
				"category": "Settings",
				"type": "select",
				"fieldType": "select",
				"required": false
			}, {
				"label": "Message",
				"category": "Messages",
				"name": "messages",
				"id": "messages",
				"title": "Please enter message",
				"fieldType": "input",
				"type": "text",
				"required": true
			}, {
				"label": "Message priority",
				"category": "Messages",
				"name": "priority",
				"id": "priority",
				"title": "Please enter message priority",
				"fieldType": "input",
				"type": "text",
				"required": true
			}, {
				"options": {
					"topic": "topic",
					"*queue": "queue"
				},
				"name": "queue_or_topic",
				"label": "Select Queue or Topic",
				"id": "queue_or_topic",
				"title": "Queue or Topic",
				"category": "Settings",
				"type": "select",
				"fieldType": "select",
				"required": false
			}, {
				"label": "Destination Name",
				"category": "Settings",
				"name": "name",
				"id": "name",
				"title": "Please enter queue or topic name",
				"fieldType": "input",
				"type": "text"
			}, {
				"options": {
					"*persistant": "2",
					"non_persistent": "1"
				},
				"name": "delivery_mode",
				"label": "Select Delivery Mode",
				"id": "delivery_mode",
				"title": "Delivery Mode",
				"category": "Settings",
				"type": "select",
				"fieldType": "select",
				"required": false
			}, {
				"label": "Schedule delay",
				"category": "More Settings",
				"name": "scheduled_delay",
				"id": "scheduled_delay",
				"title": "Please enter schedule delay in seconds",
				"fieldType": "input",
				"type": "text",
				"required": false
			}, {
				"label": "Schedule period",
				"category": "More Settings",
				"name": "scheduled_period",
				"id": "scheduled_period",
				"title": "Please enter schedule period in seconds",
				"fieldType": "input",
				"type": "text",
				"required": false
			}, {
				"label": "Schedule repeat",
				"category": "More Settings",
				"name": "scheduled_repeat",
				"id": "scheduled_repeat",
				"title": "Please enter schedule repeat times",
				"fieldType": "input",
				"type": "text",
				"required": false
			}, {
				"label": "Schedule cron",
				"category": "More Settings",
				"name": "scheduled_cron",
				"id": "scheduled_cron",
				"title": "Please enter schedule cron expression",
				"fieldType": "input",
				"type": "text",
				"required": false
			}],
			"material_icon_color": "blue",
			"displayname": "ActiveMQ Producer V2",
			"material_icon_bg_color": "bg_blue",
			"material_icon_img": "storage",
			"company": "Appup.com",
			"id": "ActiveMQ_Producer_V2_Step",
			"category": "utilities"
		}, {
			"thumbnail": "json/nodes/images/DBRestAPI.png",
			"author": "Appup Developer",
			"icon": "json/nodes/icons/DBRestAPI.png",
			"language": "en",
			"branches": "success,failure",
			"type": {
				"name": "aes-cbc-decrypt"
			},
			"material_icon": "cloud_download",
			"workflow_tasklet_class_name": "com.appup.workflows.core.steps.cyrpto.AESDecryptStepExecutor",
			"help": "AES Decrypt Step",
			"ui": [{
				"name": "file_data",
				"label": "File Data",
				"id": "file_data",
				"title": "Enter the File Data",
				"category": "General",
				"type": "text",
				"fieldType": "input",
				"required": true
			}, {
				"name": "key",
				"label": "Key",
				"id": "key",
				"title": "Enter the Key",
				"category": "General",
				"type": "text",
				"fieldType": "input",
				"required": true
			}, {
				"options": {
					"Free Marker Template": "ftl",
					"*Handlebar": "hb"
				},
				"name": "value_type",
				"label": "Type",
				"id": "value_type",
				"title": "Enter the Type",
				"category": "General",
				"type": "select",
				"fieldType": "select",
				"required": false
			}, {
				"name": "output_variable",
				"label": "Output Variable",
				"id": "output_variable",
				"title": "Output Variable",
				"category": "General",
				"type": "text",
				"fieldType": "input",
				"required": true
			}],
			"material_icon_color": "blue",
			"displayname": "AES Decrypt",
			"material_icon_bg_color": "bg_blue",
			"name": "AES Decrypt Step",
			"material_icon_img": "storage",
			"company": "Appup.com",
			"id": "AES_Decrypt_step",
			"category": "Utilities",
			"info": "AES Decrypt Step"
		}, {
			"thumbnail": "json/nodes/images/DBRestAPI.png",
			"author": "Appup Developer",
			"icon": "json/nodes/icons/DBRestAPI.png",
			"language": "en",
			"branches": "success,failure",
			"type": {
				"name": "aes-cbc-encrypt"
			},
			"material_icon": "cloud_download",
			"workflow_tasklet_class_name": "com.appup.workflows.core.steps.cyrpto.AESEncryptStepExecutor",
			"help": "AES Encrypt Step",
			"ui": [{
				"name": "file_data",
				"label": "File Data",
				"id": "file_data",
				"title": "Enter the File Data",
				"category": "General",
				"type": "text",
				"fieldType": "input",
				"required": true
			}, {
				"name": "key",
				"label": "Key",
				"id": "key",
				"title": "Enter the Key",
				"category": "General",
				"type": "text",
				"fieldType": "input",
				"required": true
			}, {
				"options": {
					"Free Marker Template": "ftl",
					"*Handlebar": "hb"
				},
				"name": "value_type",
				"label": "Type",
				"id": "value_type",
				"title": "Enter the Type",
				"category": "General",
				"type": "select",
				"fieldType": "select",
				"required": false
			}, {
				"name": "output_variable",
				"label": "Output Variable",
				"id": "output_variable",
				"title": "Output Variable",
				"category": "General",
				"type": "text",
				"fieldType": "input",
				"required": true
			}],
			"material_icon_color": "blue",
			"displayname": "AES Encrypt",
			"material_icon_bg_color": "bg_blue",
			"name": "AES Encrypt Step",
			"material_icon_img": "storage",
			"company": "Appup.com",
			"id": "AES_Encrypt_step",
			"category": "Utilities",
			"info": "AES Encrypt Step"
		}, {
			"thumbnail": "json/nodes/images/DBRestAPI.png",
			"author": "Appup Developer",
			"icon": "json/nodes/icons/DBRestAPI.png",
			"language": "en",
			"branches": "success,failure",
			"type": {
				"name": "aes-key-gen"
			},
			"material_icon": "cloud_download",
			"workflow_tasklet_class_name": "com.appup.workflows.core.steps.cyrpto.AESKeyGenStepExecutor",
			"help": "AES Key Gen Step",
			"ui": [{
				"name": "key_length",
				"label": "Key Length",
				"id": "key_length",
				"title": "Enter the Key Length",
				"category": "General",
				"type": "text",
				"fieldType": "input",
				"required": true
			}, {
				"options": {
					"Free Marker Template": "ftl",
					"*Handlebar": "hb"
				},
				"name": "value_type",
				"label": "Type",
				"id": "value_type",
				"title": "Enter the Type",
				"category": "General",
				"type": "select",
				"fieldType": "select",
				"required": false
			}, {
				"name": "output_variable",
				"label": "Output Variable",
				"id": "output_variable",
				"title": "Output Variable",
				"category": "General",
				"type": "text",
				"fieldType": "input",
				"required": true
			}],
			"material_icon_color": "blue",
			"displayname": "AES Key Gen",
			"material_icon_bg_color": "bg_blue",
			"name": "AES Key Gen Step",
			"material_icon_img": "storage",
			"company": "Appup.com",
			"id": "AES_Key_Gen_Step",
			"category": "Utilities",
			"info": "AES Key Gen  Step"
		}, {
			"thumbnail": "json/nodes/images/common/jsonio.png",
			"author": "Appup Developer",
			"icon": "json/nodes/images/common/jsonio.png",
			"language": "en",
			"branches": "success,failure",
			"type": {
				"name": "array-util"
			},
			"material_icon": "cloud_upload",
			"workflow_tasklet_class_name": "com.appup.workflows.external.steps.ArrayUtilStepExecutor",
			"help": "ArrayUtil Step",
			"ui": [{
				"name": "input_variable",
				"label": "Input Variable",
				"id": "input_variable",
				"title": "Enter input variable",
				"category": "General",
				"type": "text",
				"fieldType": "input",
				"required": true
			}, {
				"name": "chunk_size",
				"label": "Chunk size",
				"id": "chunk_size",
				"title": "Enter the chunk size",
				"category": "General",
				"type": "text",
				"fieldType": "input",
				"required": false
			}, {
				"name": "chunk_query",
				"label": "Chunk Query",
				"id": "chunk_query",
				"title": "Enter chunk query",
				"category": "General",
				"type": "text",
				"fieldType": "input",
				"required": false
			}, {
				"options": {
					"true": "true",
					"*false": "false"
				},
				"name": "options",
				"label": "Options",
				"id": "options",
				"title": "Enter Options",
				"category": "General",
				"type": "select",
				"fieldType": "select",
				"required": false
			}, {
				"name": "output_variable",
				"label": "Enter Output variable",
				"id": "output_variable",
				"title": "Enter Output variable",
				"category": "General",
				"type": "text",
				"fieldType": "input",
				"required": false
			}],
			"material_icon_color": "blue",
			"displayname": "ArrayUtil Step",
			"material_icon_bg_color": "bg_blue",
			"name": "ArrayUtil Step",
			"material_icon_img": "storage",
			"company": "Appup.com",
			"id": "array_util_step",
			"category": "Utilities",
			"info": "ArrayUtil Step"
		}, {
			"thumbnail": "json/nodes/images/new/sql-export-node.png",
			"author": "Appup Developer",
			"icon": "json/nodes/icons/new/sql-export.png",
			"language": "en",
			"branches": "success,failure",
			"type": {
				"name": "basicsql-export"
			},
			"material_icon": "storage",
			"workflow_tasklet_class_name": "com.appup.workflows.core.steps.sql.BasicSQLExportStepExecutor",
			"help": "SQL Export",
			"ui": [{
				"dynamicValue": "CONFIG_NAME",
				"dynamicName": "CONFIG_NAME",
				"name": "plugin_name",
				"label": "Database",
				"id": "plugin_name",
				"title": "Database",
				"category": "General",
				"type": "select",
				"fieldType": "dynamicselect",
				"url": "/app/get-by-category/{{app_id}}/mysql-database/",
				"required": false
			}, {
				"name": "value",
				"label": "Query",
				"id": "value",
				"title": "Query",
				"category": "General",
				"type": "text",
				"fieldType": "input",
				"required": false
			}, {
				"options": {
					"Free Marker Template": "ftl",
					"*Handlebar": "hb"
				},
				"name": "value_type",
				"label": "Type",
				"id": "value_type",
				"title": "Type",
				"category": "General",
				"type": "select",
				"fieldType": "select",
				"required": false
			}, {
				"name": "output_variable",
				"label": "Output Variable",
				"id": "output_variable",
				"title": "Output Variable",
				"category": "General",
				"type": "text",
				"fieldType": "input",
				"required": false
			}],
			"material_icon_color": "blue",
			"displayname": "Basic SQL Export",
			"material_icon_bg_color": "bg_blue",
			"name": "Basic SQL Export",
			"material_icon_img": "storage",
			"company": "Appup.com",
			"id": "SQL_Export",
			"category": "Database",
			"info": "SQL Export"
		}, {
			"thumbnail": "json/nodes/images/new/sql-import-node.png",
			"author": "Appup Developer",
			"icon": "json/nodes/icons/new/sql-import.png",
			"language": "en",
			"branches": "success,failure",
			"type": {
				"name": "basicsql-import"
			},
			"material_icon": "storage",
			"workflow_tasklet_class_name": "com.appup.workflows.core.steps.sql.BasicSQLImportStepExecutor",
			"help": "Sql Import",
			"ui": [{
				"dynamicValue": "CONFIG_NAME",
				"dynamicName": "CONFIG_NAME",
				"name": "plugin_name",
				"label": "Database",
				"id": "plugin_name",
				"title": "Database",
				"category": "General",
				"type": "select",
				"fieldType": "dynamicselect",
				"url": "/app/get-by-category/{{app_id}}/mysql-database/",
				"required": false
			}, {
				"name": "data",
				"label": "Data",
				"id": "data",
				"title": "Please enter the data",
				"category": "General",
				"type": "text",
				"fieldType": "input",
				"required": false
			}, {
				"name": "table",
				"label": "Table",
				"id": "table",
				"title": "Table",
				"category": "General",
				"type": "text",
				"fieldType": "input",
				"required": false
			}, {
				"options": {
					"Free Marker Template": "ftl",
					"*Handlebar": "hb"
				},
				"name": "value_type",
				"label": "Type",
				"id": "value_type",
				"title": "Type",
				"category": "General",
				"type": "select",
				"fieldType": "select",
				"required": false
			}, {
				"name": "output_variable",
				"label": "Output Variable",
				"id": "output_variable",
				"title": "Output Variable",
				"category": "General",
				"type": "text",
				"fieldType": "input",
				"required": false
			}, {
				"options": {
					"True": "true",
					"*False": "false"
				},
				"name": "header",
				"label": "Header",
				"id": "header",
				"title": "Select Header is there or not",
				"category": "Custom",
				"type": "select",
				"fieldType": "select",
				"required": false
			}, {
				"name": "fields_terminated_by",
				"label": "Fields terminated by",
				"id": "fields_terminated_by",
				"title": "Field terminated delimiter",
				"category": "Custom",
				"type": "text",
				"fieldType": "input",
				"required": false
			}, {
				"name": "lines_terminated_by",
				"label": "Lines terminated by",
				"id": "lines_terminated_by",
				"title": "Lines terminated delimiter",
				"category": "Custom",
				"type": "text",
				"fieldType": "input",
				"required": false
			}, {
				"name": "custom_fields",
				"label": "Custom fields",
				"id": "custom_fields",
				"title": "Custom header fields separated by comma",
				"category": "Custom",
				"type": "text",
				"fieldType": "input",
				"required": false
			}],
			"material_icon_color": "blue",
			"displayname": "Basic SQL Import",
			"material_icon_bg_color": "bg_blue",
			"name": "Basic SQL Import",
			"material_icon_img": "storage",
			"company": "Appup.com",
			"id": "SQL_Import",
			"category": "Database",
			"info": "SQL Import"
		}, {
			"thumbnail": "json/nodes/images/common/SetProperty.png",
			"author": "Appup Developer",
			"icon": "json/nodes/icons/common/SetProperty.png",
			"language": "en",
			"branches": "success,failure",
			"type": {
				"name": "box-file-download"
			},
			"material_icon": "settings",
			"workflow_tasklet_class_name": "com.appup.workflows.external.steps.boxdrive.BoxAPIFileDownLoadStepExecutor",
			"help": "Download the file from Box Drive.",
			"ui": [{
				"name": "file_id",
				"label": "Enter the File Id:",
				"id": "file_id",
				"title": "File Id",
				"category": "Settings",
				"type": "text",
				"fieldType": "input",
				"required": true
			}, {
				"name": "version",
				"label": "Enter the version:",
				"id": "version",
				"title": "Version",
				"category": "Settings",
				"type": "text",
				"fieldType": "input",
				"required": false
			}, {
				"options": {
					"Free Marker Template": "ftl",
					"*Handlebar": "hb"
				},
				"name": "value_type",
				"label": "Select Template",
				"id": "value_type",
				"title": "Template type",
				"category": "Settings",
				"type": "select",
				"fieldType": "select",
				"required": true
			}, {
				"name": "output_variable",
				"label": "Output Variable",
				"id": "output-variable",
				"title": "Enter variable name to hold output",
				"category": "Settings",
				"type": "text",
				"fieldType": "input",
				"required": false
			}, {
				"ui": [{
					"name": "key",
					"label": "Key",
					"id": "key",
					"title": "Enter the value",
					"category": "Settings",
					"type": "text",
					"fieldType": "input",
					"required": false
				}, {
					"name": "value",
					"label": "Value",
					"id": "result",
					"title": "Enter the value",
					"category": "Settings",
					"type": "text",
					"fieldType": "input",
					"required": false
				}],
				"name": "header",
				"label": "Headers",
				"id": "header",
				"title": "",
				"category": "Headers",
				"type": "grid",
				"fieldType": "grid",
				"required": false
			}],
			"material_icon_color": "blue",
			"displayname": "Box API File Download",
			"material_icon_bg_color": "bg_blue",
			"name": "Box API File Download",
			"material_icon_img": "storage",
			"company": "Appup.com",
			"id": "box-file-download",
			"category": "Auth",
			"info": "Download the file from Box Drive."
		}, {
			"thumbnail": "json/nodes/images/common/SetProperty.png",
			"author": "Appup Developer",
			"icon": "json/nodes/icons/common/SetProperty.png",
			"language": "en",
			"branches": "success,failure",
			"type": {
				"name": "box-file-upload"
			},
			"material_icon": "settings",
			"workflow_tasklet_class_name": "com.appup.workflows.external.steps.boxdrive.BoxFileUploadStepExecutor",
			"help": "Upload file into Box Drive.",
			"ui": [{
				"name": "file_name",
				"label": "Enter File Name:",
				"id": "file_name",
				"title": "File Name",
				"category": "Settings",
				"type": "text",
				"fieldType": "input",
				"required": true
			}, {
				"name": "folder_Id",
				"label": "Enter the Parent Folder Id:",
				"id": "folder_Id",
				"title": "Folder Id",
				"category": "Settings",
				"type": "text",
				"fieldType": "input",
				"required": false
			}, {
				"name": "fileData",
				"label": "File Upload Data:",
				"id": "fileData",
				"title": "File Data",
				"category": "Settings",
				"type": "text",
				"fieldType": "input",
				"required": true
			}, {
				"name": "access_token",
				"label": "Oauth Access Token:",
				"id": "access_token",
				"title": "Access Token",
				"category": "Settings",
				"type": "text",
				"fieldType": "input",
				"required": true
			}, {
				"options": {
					"Free Marker Template": "ftl",
					"*Handlebar": "hb"
				},
				"name": "value_type",
				"label": "Select Template",
				"id": "value",
				"title": "Template type",
				"category": "Settings",
				"type": "select",
				"fieldType": "select",
				"required": true
			}, {
				"name": "output_variable",
				"label": "Output Variable",
				"id": "output-variable",
				"title": "Enter variable name to hold output",
				"category": "Settings",
				"type": "text",
				"fieldType": "input",
				"required": false
			}],
			"material_icon_color": "blue",
			"displayname": "Box API File Upload",
			"material_icon_bg_color": "bg_blue",
			"name": "Box API File Upload",
			"material_icon_img": "storage",
			"company": "Appup.com",
			"id": "box-file-upload",
			"category": "Auth",
			"info": "Upload the file into Box Drive."
		}, {
			"thumbnail": "json/nodes/images/sms/Condition.png",
			"author": "Appup Developer",
			"icon": "json/nodes/icons/sms/Condition.png",
			"language": "en",
			"branches": "success,failure",
			"type": {
				"name": "code-java"
			},
			"material_icon": "code",
			"workflow_tasklet_class_name": "com.appup.workflows.external.steps.code.JavaCodeStep",
			"help": "Java Code Execution Step",
			"ui": [{
				"name": "class_name",
				"label": "Class Name",
				"id": "class_name",
				"title": "Enter the name of Java class",
				"category": "Settings",
				"type": "text",
				"fieldType": "input",
				"required": true
			}, {
				"name": "package_name",
				"label": "Package Name",
				"id": "package_name",
				"title": "Enter the package of Java class (shouldn't end with dot(.))",
				"category": "Settings",
				"type": "text",
				"fieldType": "input",
				"required": true
			}],
			"material_icon_color": "blue",
			"displayname": "Java Code Executor",
			"material_icon_bg_color": "bg_blue",
			"name": "Java Code Executor",
			"material_icon_img": "storage",
			"company": "Appup.com",
			"id": "java_code_step",
			"category": "Developers",
			"info": "Java Code Executor"
		}, {
			"thumbnail": "json/nodes/images/common/jsonio.png",
			"author": "Appup Developer",
			"icon": "json/nodes/icons/common/jsonio.png",
			"language": "en",
			"branches": "success,failure",
			"type": {
				"name": "code-js-inline-plugin"
			},
			"material_icon": "code",
			"workflow_tasklet_class_name": "com.appup.workflows.external.steps.code.JavaScriptCodeStep",
			"help": "Exeucutes configured code in JS Plugin.",
			"ui": [{
				"dynamicValue": "CONFIG_NAME",
				"dynamicName": "CONFIG_NAME",
				"name": "plugin_name",
				"label": "Code",
				"id": "plugin_name",
				"title": "JWT Plugin",
				"category": "General",
				"type": "select",
				"fieldType": "dynamicselect",
				"url": "/app/getPluginConfig/{{app_id}}/code-js-plugin/",
				"required": true
			}],
			"material_icon_color": "blue",
			"displayname": "JS Code",
			"material_icon_bg_color": "bg_blue",
			"name": "JS Code",
			"material_icon_img": "storage",
			"company": "Appup.com",
			"id": "js_code_step",
			"category": "Developers",
			"info": "Executes configured code in JS Plugin."
		}, {
			"thumbnail": "json/nodes/images/common/jsonio.png",
			"author": "Appup Developer",
			"icon": "json/nodes/icons/common/jsonio.png",
			"language": "en",
			"branches": "success,failure",
			"type": {
				"name": "code-js"
			},
			"material_icon": "code",
			"workflow_tasklet_class_name": "com.appup.workflows.external.steps.code.JavaScriptCodeStep",
			"help": "Execute your code here.",
			"ui": [{
				"name": "src",
				"label": "Source",
				"id": "file_path",
				"title": "Enter the location of javascript file.",
				"category": "Settings",
				"type": "textarea",
				"fieldType": "textarea",
				"required": true
			}, {
				"value": "true",
				"name": "inline",
				"id": "inline",
				"title": "Inline",
				"category": "Settings",
				"type": "hidden",
				"fieldType": "input",
				"required": false
			}],
			"material_icon_color": "blue",
			"displayname": "JS Code",
			"material_icon_bg_color": "bg_blue",
			"name": "JS Code",
			"material_icon_img": "storage",
			"company": "Appup.com",
			"id": "js_code_step",
			"category": "Developers",
			"info": "Execute your code here."
		}, {
			"thumbnail": "json/nodes/images/common/jsonio.png",
			"author": "Appup Developer",
			"icon": "json/nodes/icons/common/jsonio.png",
			"language": "en",
			"branches": "success,failure",
			"type": {
				"name": "code-js"
			},
			"material_icon": "code",
			"workflow_tasklet_class_name": "com.appup.workflows.external.steps.code.JavaScriptCodeStep",
			"help": "Executes uploaded JS code.",
			"ui": [{
				"name": "src",
				"label": "File path",
				"id": "file_path",
				"title": "Enter the location of javascript file.",
				"category": "Settings",
				"type": "text",
				"fieldType": "input",
				"required": true
			}, {
				"name": "function_name",
				"label": "Function",
				"id": "function_name",
				"title": "Enter the name of the function to be executed (case-sensitive).",
				"category": "Settings",
				"type": "text",
				"fieldType": "input",
				"required": true
			}, {
				"name": "returnOutputVariable",
				"label": "Return Output Variable",
				"id": "returnOutputVariable",
				"title": "Enter the Return Output Variable",
				"category": "Settings",
				"type": "text",
				"fieldType": "input",
				"required": false
			}, {
				"value": "{}",
				"name": "dynamicParams",
				"id": "dynamicParams",
				"title": "Dynamic Params",
				"category": "Settings",
				"type": "hidden",
				"fieldType": "input",
				"required": false
			}, {
				"name": "inline",
				"value": "false",
				"id": "inline",
				"title": "Inline",
				"category": "Settings",
				"type": "hidden",
				"fieldType": "input",
				"required": false
			}],
			"material_icon_color": "blue",
			"displayname": "JS Code",
			"material_icon_bg_color": "bg_blue",
			"name": "JS Code",
			"material_icon_img": "storage",
			"company": "Appup.com",
			"id": "js_code_step",
			"category": "Developers",
			"info": "Executes uploaded JS code."
		}, {
			"thumbnail": "json/nodes/images/sms/Condition.png",
			"author": "Appup Developer",
			"icon": "json/nodes/icons/sms/Condition.png",
			"language": "en",
			"branches": "success,failure",
			"type": {
				"name": "condition"
			},
			"material_icon": "compare_arrows",
			"workflow_tasklet_class_name": "com.appup.workflows.core.steps.condition.ConditionStepExecutor",
			"help": "Check for multiple conditions in your workflow.",
			"ui": [{
				"ui": [{
					"options": {
						"strlen": "strlen",
						"value": "value"
					},
					"name": "if_type",
					"label": "If",
					"id": "if_type",
					"title": "Variable type.",
					"category": "Settings",
					"type": "select",
					"fieldType": "select",
					"required": true
				}, {
					"name": "variable1",
					"label": "Variable1",
					"id": "variable1",
					"title": "Enter value",
					"category": "Settings",
					"type": "text",
					"fieldType": "input",
					"required": true
				}, {
					"options": {
						"less than": "less_than",
						"greater than or equals": "greater_than_or_equals",
						"equal to": "equal_to",
						"contains": "contains",
						"less than or equals": "less_than_or_equals",
						"in": "in",
						"not equal to": "not_equal_to",
						"greater than": "greater_than"
					},
					"name": "comparator",
					"label": "Compare this",
					"id": "comparator",
					"title": "Operation type.",
					"category": "Settings",
					"type": "select",
					"fieldType": "select",
					"required": true
				}, {
					"name": "variable2",
					"label": "Variable2",
					"id": "variable2",
					"title": "Enter value",
					"category": "Settings",
					"type": "text",
					"fieldType": "input",
					"required": true
				}],
				"name": "and_conditions",
				"label": "And",
				"id": "and_conditions",
				"title": "",
				"category": "Settings",
				"type": "grid",
				"fieldType": "grid",
				"required": false
			}, {
				"ui": [{
					"options": {
						"strlen": "strlen",
						"value": "value"
					},
					"name": "if_type",
					"label": "If",
					"id": "if_type",
					"title": "Variable type.",
					"category": "Settings",
					"type": "select",
					"fieldType": "select",
					"required": true
				}, {
					"name": "variable1",
					"label": "Variable1",
					"id": "variable1",
					"title": "Enter value",
					"category": "Settings",
					"type": "text",
					"fieldType": "input",
					"required": true
				}, {
					"options": {
						"less than": "less_than",
						"greater than or equals": "greater_than_or_equals",
						"equal to": "equal_to",
						"contains": "contains",
						"less than or equals": "less_than_or_equals",
						"in": "in",
						"not equal to": "not_equal_to",
						"greater than": "greater_than"
					},
					"name": "comparator",
					"label": "Compare this",
					"id": "comparator",
					"title": "Operation type.",
					"category": "Settings",
					"type": "select",
					"fieldType": "select",
					"required": true
				}, {
					"name": "variable2",
					"label": "Variable2",
					"id": "variable2",
					"title": "Enter value",
					"category": "Settings",
					"type": "text",
					"fieldType": "input",
					"required": true
				}],
				"name": "or_conditions",
				"label": "Or",
				"id": "or_conditions",
				"title": "",
				"category": "Settings",
				"type": "grid",
				"fieldType": "grid",
				"required": false
			}, {
				"name": "output_variable",
				"label": "Output Variable",
				"id": "output_variable",
				"title": "Enter the Output Variable",
				"category": "Settings",
				"type": "text",
				"fieldType": "input",
				"required": false
			}, {
				"options": {
					"Free Marker Template": "ftl",
					"*Handlebar": "hb"
				},
				"name": "value_type",
				"label": "Select type",
				"id": "value_type",
				"title": "Type",
				"category": "General",
				"type": "text",
				"fieldType": "select",
				"required": false
			}],
			"material_icon_color": "blue",
			"displayname": "Condition",
			"material_icon_bg_color": "bg_blue",
			"name": "Condition",
			"material_icon_img": "build",
			"company": "Appup.com",
			"id": "conditionStep",
			"category": "Utilities",
			"info": "Check for multiple conditions in your workflow."
		}, {
			"thumbnail": "json/nodes/images/sms/Condition.png",
			"author": "Appup Developer",
			"icon": "json/nodes/icons/sms/Condition.png",
			"language": "en",
			"branches": "success,failure",
			"type": {
				"name": "utils-convert"
			},
			"material_icon": "compare_arrows",
			"workflow_tasklet_class_name": "com.appup.workflows.core.steps.ConvertStepExecutor",
			"help": "convert data from one format to another format.",
			"ui": [{
				"options": {
					"Json": "json",
					"XML": "xml",
					"YAML": "yml",
					"CRON_EXPRESSION": "cron_expression"
				},
				"name": "convert_from",
				"label": "Convert From",
				"id": "convert_from",
				"title": "Convert data from",
				"category": "General",
				"type": "select",
				"fieldType": "select",
				"required": true
			}, {
				"options": {
					"Json String": "json",
					"Array of Json Objects": "json_array",
					"Json Object": "json_object",
					"XML": "xml",
					"YAML": "yml",
					"Runtime": "runtime"
				},
				"name": "convert_to",
				"label": "Convert To",
				"id": "convert_to",
				"title": "Convert data To",
				"category": "General",
				"type": "select",
				"fieldType": "select",
				"required": true
			}, {
				"name": "output_variable",
				"label": "Output Variable",
				"id": "output_variable",
				"title": "Enter the output variable.",
				"category": "General",
				"type": "text",
				"fieldType": "input",
				"required": false
			}, {
				"name": "root_name",
				"label": "Root Element Name",
				"id": "root_name",
				"title": "Enter the root name.",
				"category": "General",
				"type": "text",
				"fieldType": "input",
				"required": false
			}, {
				"options": {
					"Free Marker Template": "ftl",
					"*Handlebar": "hb"
				},
				"name": "value_type",
				"label": "Value type",
				"id": "value_type",
				"title": "Type",
				"category": "General",
				"type": "text",
				"fieldType": "select",
				"required": false
			}, {
				"name": "data",
				"label": "Data",
				"id": "data",
				"title": "Data to convert",
				"category": "General",
				"type": "textarea",
				"fieldType": "textarea",
				"required": false
			}],
			"material_icon_color": "blue",
			"displayname": "Convert Data",
			"material_icon_bg_color": "bg_blue",
			"name": "Convert Data",
			"material_icon_img": "storage",
			"company": "Appup.com",
			"id": "utils-convert",
			"category": "Utilities",
			"info": "Convert Step"
		}, {
			"thumbnail": "json/nodes/images/DBRestAPI.png",
			"author": "Appup Developer",
			"icon": "json/nodes/icons/DBRestAPI.png",
			"language": "en",
			"branches": "success,failure",
			"type": {
				"name": "custom-web-push"
			},
			"material_icon": "cloud_upload",
			"workflow_tasklet_class_name": "com.appup.core.workflow.step.Context.PushCustomStepExecutor",
			"help": "Custom Web push Notification",
			"ui": [{
				"name": "public_key",
				"label": "Enter public Key",
				"id": "public_key",
				"title": "Enter public Key",
				"category": "Settings",
				"type": "text",
				"fieldType": "input",
				"required": true
			}, {
				"name": "private_key",
				"label": "Enter private key",
				"id": "private_key",
				"title": "Enter private key",
				"category": "Settings",
				"type": "text",
				"fieldType": "input",
				"required": true
			}, {
				"name": "p256dh",
				"label": "User public key(p256dh)",
				"id": "p256dh",
				"title": "User public key(p256dh)",
				"category": "Settings",
				"type": "text",
				"fieldType": "input",
				"required": true
			}, {
				"name": "auth",
				"label": "Auth Key",
				"id": "auth",
				"title": "Auth Key",
				"category": "Settings",
				"type": "text",
				"fieldType": "input",
				"required": true
			}, {
				"name": "end_point",
				"label": "End point",
				"id": "end_point",
				"title": "Enter the endpoint url",
				"category": "Settings",
				"type": "text",
				"fieldType": "input",
				"required": true
			}, {
				"name": "title",
				"label": "Title",
				"id": "title",
				"title": "Enter title",
				"category": "General",
				"type": "text",
				"fieldType": "input",
				"required": true
			}, {
				"name": "message",
				"label": "Message",
				"id": "message",
				"title": "Enter the message",
				"category": "General",
				"type": "text",
				"fieldType": "input",
				"required": true
			}, {
				"name": "click_target",
				"label": "Click event target",
				"id": "click_target",
				"title": "Enter event Target",
				"category": "General",
				"type": "text",
				"fieldType": "input",
				"required": true
			}, {
				"options": {
					"Free Marker Template": "ftl",
					"*Handlebar": "hb"
				},
				"name": "value_type",
				"label": "Type",
				"id": "value_type",
				"title": "Enter the Type",
				"category": "General",
				"type": "select",
				"fieldType": "select",
				"required": false
			}, {
				"options": {
					"True": "true",
					"*False": "false"
				},
				"name": "async_send",
				"label": "Async send",
				"id": "async_send",
				"title": "Async send",
				"category": "General",
				"type": "select",
				"fieldType": "select",
				"required": false
			}, {
				"name": "output_variable",
				"label": "Output Variable",
				"id": "output_variable",
				"title": "Output Variable",
				"category": "General",
				"type": "text",
				"fieldType": "input",
				"required": true
			}],
			"material_icon_color": "blue",
			"displayname": "Custom Web Push Notification",
			"material_icon_bg_color": "bg_blue",
			"name": "Custom Web Push Notification",
			"material_icon_img": "storage",
			"company": "Appup.com",
			"id": "custom-push-notification",
			"category": "Google",
			"info": "Custom web Push Notification"
		}, {
			"thumbnail": "json/nodes/images/new/sql-delete-node.png",
			"author": "Appup Developer",
			"icon": "json/nodes/icons/new/sql-delete.png",
			"language": "en",
			"branches": "success,failure",
			"type": {
				"name": "custom-sql-delete"
			},
			"material_icon": "storage",
			"workflow_tasklet_class_name": "com.appup.workflows.external.steps.customsql.CustomSQLDeleteStepExecutor",
			"help": "Execute Custom SQL delete Query",
			"ui": [{
				"dynamicValue": "CONFIG_NAME",
				"dynamicName": "CONFIG_NAME",
				"name": "plugin_name",
				"label": "Database",
				"id": "plugin_name",
				"title": "Database",
				"category": "General",
				"type": "select",
				"fieldType": "dynamicselect",
				"url": "/app/get-by-category/{{app_id}}/mysql-database/",
				"required": true
			}, {
				"name": "value",
				"label": "Query",
				"id": "value",
				"title": "Value",
				"category": "General",
				"type": "text",
				"fieldType": "textarea",
				"required": true
			}, {
				"name": "value_type",
				"label": "Value Type:",
				"id": "value_type",
				"title": "Value Type",
				"category": "General",
				"type": "text",
				"fieldType": "input",
				"required": true
			}, {
				"name": "custom_var",
				"label": "Custom Variable:",
				"id": "custom_var",
				"title": "Variable Name",
				"category": "General",
				"type": "text",
				"fieldType": "input",
				"required": false
			}, {
				"name": "custom_value",
				"label": "Custom Query:",
				"id": "custom_value",
				"title": "Custom Query",
				"category": "General",
				"type": "text",
				"fieldType": "textarea",
				"required": false
			}],
			"material_icon_color": "blue",
			"displayname": "Custom SQL Delete",
			"material_icon_bg_color": "bg_blue",
			"name": "Custom SQL Delete Step",
			"material_icon_img": "storage",
			"company": "Appup.com",
			"id": "custom-sql-delete",
			"category": "Database",
			"info": "Used to delete data stored in table."
		}, {
			"thumbnail": "json/nodes/images/new/sql-delete-node.png",
			"author": "Appup Developer",
			"icon": "json/nodes/icons/new/sql-delete.png",
			"language": "en",
			"branches": "success,failure",
			"type": {
				"name": "custom-sql-insert"
			},
			"material_icon": "storage",
			"workflow_tasklet_class_name": "com.appup.workflows.external.steps.customsql.CustomSQLInsertStepExecutor",
			"help": "Execute Custom SQL Insert Query",
			"ui": [{
				"dynamicValue": "CONFIG_NAME",
				"dynamicName": "CONFIG_NAME",
				"name": "plugin_name",
				"label": "Database",
				"id": "plugin_name",
				"title": "Database",
				"category": "General",
				"type": "select",
				"fieldType": "dynamicselect",
				"url": "/app/get-by-category/{{app_id}}/mysql-database/",
				"required": true
			}, {
				"name": "value",
				"label": "Query",
				"id": "value",
				"title": "Value",
				"category": "General",
				"type": "text",
				"fieldType": "textarea",
				"required": true
			}, {
				"name": "value_type",
				"label": "Value Type:",
				"id": "value_type",
				"title": "Value Type",
				"category": "General",
				"type": "text",
				"fieldType": "input",
				"required": true
			}, {
				"name": "custom_var",
				"label": "Custom Variable:",
				"id": "custom_var",
				"title": "Variable Name",
				"category": "General",
				"type": "text",
				"fieldType": "input",
				"required": false
			}, {
				"name": "custom_value",
				"label": "Custom Query:",
				"id": "custom_value",
				"title": "Custom Query",
				"category": "General",
				"type": "text",
				"fieldType": "textarea",
				"required": false
			}, {
				"name": "output_variable",
				"label": "Output Variable",
				"id": "output_variable",
				"title": "Enter variable name to hold output",
				"category": "Settings",
				"type": "text",
				"fieldType": "input",
				"required": false
			}],
			"material_icon_color": "blue",
			"displayname": "Custom SQL Insert",
			"material_icon_bg_color": "bg_blue",
			"name": "Custom SQL Insert Step",
			"material_icon_img": "storage",
			"company": "Appup.com",
			"id": "custom-sql-insert",
			"category": "Database",
			"info": "Used to Insert data in to table."
		}, {
			"thumbnail": "json/nodes/images/new/sql-delete-node.png",
			"author": "Appup Developer",
			"icon": "json/nodes/icons/new/sql-delete.png",
			"language": "en",
			"branches": "success,failure",
			"type": {
				"name": "custom-sql-one"
			},
			"material_icon": "storage",
			"workflow_tasklet_class_name": "com.appup.workflows.external.steps.customsql.CustomSQLOneStepExecutor",
			"help": "SQL Select and Return first record",
			"ui": [{
				"dynamicValue": "CONFIG_NAME",
				"dynamicName": "CONFIG_NAME",
				"name": "plugin_name",
				"label": "Database",
				"id": "plugin_name",
				"title": "Database",
				"category": "General",
				"type": "select",
				"fieldType": "dynamicselect",
				"url": "/app/get-by-category/{{app_id}}/mysql-database/",
				"required": true
			}, {
				"name": "value",
				"label": "Query",
				"id": "value",
				"title": "Value",
				"category": "General",
				"type": "text",
				"fieldType": "textarea",
				"required": true
			}, {
				"name": "value_type",
				"label": "Value Type:",
				"id": "value_type",
				"title": "Value Type",
				"category": "General",
				"type": "text",
				"fieldType": "input",
				"required": true
			}, {
				"name": "custom_var",
				"label": "Custom Variable:",
				"id": "custom_var",
				"title": "Variable Name",
				"category": "General",
				"type": "text",
				"fieldType": "input",
				"required": false
			}, {
				"name": "custom_value",
				"label": "Custom Query:",
				"id": "custom_value",
				"title": "Custom Query",
				"category": "General",
				"type": "text",
				"fieldType": "textarea",
				"required": false
			}, {
				"name": "output_variable",
				"label": "Output Variable",
				"id": "output_variable",
				"title": "Enter variable name to hold output",
				"category": "Settings",
				"type": "text",
				"fieldType": "input",
				"required": false
			}],
			"material_icon_color": "blue",
			"displayname": "Custom SQL One",
			"material_icon_bg_color": "bg_blue",
			"name": "Custom SQL One Step",
			"material_icon_img": "storage",
			"company": "Appup.com",
			"id": "custom-sql-one",
			"category": "Database",
			"info": "Select only one record from the SQL statement executed."
		}, {
			"thumbnail": "json/nodes/images/new/sql-delete-node.png",
			"author": "Appup Developer",
			"icon": "json/nodes/icons/new/sql-delete.png",
			"language": "en",
			"branches": "success,failure",
			"type": {
				"name": "custom-sql"
			},
			"material_icon": "storage",
			"workflow_tasklet_class_name": "com.appup.workflows.external.steps.customsql.CustomSQLStepExecutor",
			"help": "SQL Select",
			"ui": [{
				"dynamicValue": "CONFIG_NAME",
				"dynamicName": "CONFIG_NAME",
				"name": "plugin_name",
				"label": "Database",
				"id": "plugin_name",
				"title": "Database",
				"category": "General",
				"type": "select",
				"fieldType": "dynamicselect",
				"url": "/app/get-by-category/{{app_id}}/mysql-database/",
				"required": true
			}, {
				"name": "value",
				"label": "Query",
				"id": "value",
				"title": "Value",
				"category": "General",
				"type": "text",
				"fieldType": "textarea",
				"required": true
			}, {
				"name": "value_type",
				"label": "Value Type:",
				"id": "value_type",
				"title": "Value Type",
				"category": "General",
				"type": "text",
				"fieldType": "input",
				"required": true
			}, {
				"name": "custom_var",
				"label": "Custom Variable:",
				"id": "custom_var",
				"title": "Variable Name",
				"category": "General",
				"type": "text",
				"fieldType": "input",
				"required": false
			}, {
				"name": "custom_value",
				"label": "Custom Query:",
				"id": "custom_value",
				"title": "Custom Query",
				"category": "General",
				"type": "text",
				"fieldType": "textarea",
				"required": false
			}, {
				"name": "output_variable",
				"label": "Output Variable",
				"id": "output_variable",
				"title": "Enter variable name to hold output",
				"category": "Settings",
				"type": "text",
				"fieldType": "input",
				"required": false
			}],
			"material_icon_color": "blue",
			"displayname": "Custom SQL Select",
			"material_icon_bg_color": "bg_blue",
			"name": "Custom SQL Select Step",
			"material_icon_img": "storage",
			"company": "Appup.com",
			"id": "custom-sql",
			"category": "Database",
			"info": "Execute a select query and fetch the records."
		}, {
			"thumbnail": "json/nodes/images/new/sql-delete-node.png",
			"author": "Appup Developer",
			"icon": "json/nodes/icons/new/sql-delete.png",
			"language": "en",
			"branches": "success,failure",
			"type": {
				"name": "custom-sql-update"
			},
			"material_icon": "storage",
			"workflow_tasklet_class_name": "com.appup.workflows.external.steps.customsql.CustomSQLUpdateStepExecutor",
			"help": "SQL Update Query Execution",
			"ui": [{
				"dynamicValue": "CONFIG_NAME",
				"dynamicName": "CONFIG_NAME",
				"name": "plugin_name",
				"label": "Database",
				"id": "plugin_name",
				"title": "Database",
				"category": "General",
				"type": "select",
				"fieldType": "dynamicselect",
				"url": "/app/get-by-category/{{app_id}}/mysql-database/",
				"required": true
			}, {
				"name": "value",
				"label": "Query",
				"id": "value",
				"title": "Value",
				"category": "General",
				"type": "text",
				"fieldType": "textarea",
				"required": true
			}, {
				"name": "value_type",
				"label": "Value Type:",
				"id": "value_type",
				"title": "Value Type",
				"category": "General",
				"type": "text",
				"fieldType": "input",
				"required": true
			}, {
				"name": "custom_var",
				"label": "Custom Variable:",
				"id": "custom_var",
				"title": "Variable Name",
				"category": "General",
				"type": "text",
				"fieldType": "input",
				"required": false
			}, {
				"name": "custom_value",
				"label": "Custom Query:",
				"id": "custom_value",
				"title": "Custom Query",
				"category": "General",
				"type": "text",
				"fieldType": "textarea",
				"required": false
			}],
			"material_icon_color": "blue",
			"displayname": "Custom SQL Update",
			"material_icon_bg_color": "bg_blue",
			"name": "Custom SQL Update Step",
			"material_icon_img": "storage",
			"company": "Appup.com",
			"id": "custom-sql-update",
			"category": "Database",
			"info": "Update database table records."
		}, {
			"thumbnail": "json/nodes/images/new/sql-delete-node.png",
			"author": "Appup Developer",
			"icon": "json/nodes/icons/new/sql-delete.png",
			"language": "en",
			"branches": "success,failure",
			"type": {
				"name": "get-env-data"
			},
			"material_icon": "storage",
			"workflow_tasklet_class_name": "com.appup.workflows.external.steps.DataCollectionStepExecutor",
			"help": "Used to give the environment and system values based on action.",
			"ui": [{
				"name": "action",
				"label": "Action:",
				"id": "action",
				"title": "Action",
				"category": "Settings",
				"type": "text",
				"fieldType": "input",
				"required": true
			}, {
				"name": "variable",
				"label": "variables:",
				"id": "variable",
				"title": "Value Type",
				"category": "Settings",
				"type": "text",
				"fieldType": "textarea",
				"required": true
			}],
			"material_icon_color": "blue",
			"displayname": "Data Collection",
			"material_icon_bg_color": "bg_blue",
			"name": "Data Collection Step",
			"material_icon_img": "storage",
			"company": "Appup.com",
			"id": "get-env-data",
			"category": "Developers",
			"info": "Used to give the environment and system values based on action."
		}, {
			"thumbnail": "json/nodes/images/common/jsonio.png",
			"author": "Appup Developer",
			"icon": "json/nodes/icons/common/jsonio.png",
			"language": "en",
			"branches": "success,failure",
			"type": {
				"name": "dns-lookup"
			},
			"material_icon": "accessible",
			"workflow_tasklet_class_name": "com.appup.workflows.external.steps.DNSLookupStepExecutor",
			"help": "DNS Lookup Details",
			"ui": [{
				"name": "domain_name",
				"label": "Domain Name",
				"id": "domain_name",
				"title": "Enter Domain Name",
				"category": "Info",
				"type": "text",
				"fieldType": "input",
				"required": false
			}, {
				"options": {
					"*CNAME": "CNAME",
					"A": "A",
					"AAAA": "AAAA",
					"HINFO": "HINFO",
					"ISDN": "ISDN",
					"MX": "MX",
					"NS": "NS",
					"PTR": "PTR",
					"TXT": "TXT",
					"SOA": "SOA"
				},
				"name": "record_type",
				"label": "Record type",
				"id": "record_type",
				"title": "Record Type",
				"category": "Info",
				"type": "text",
				"fieldType": "select",
				"required": false
			}, {
				"name": "value",
				"label": "Value",
				"id": "value",
				"title": "Enter Value",
				"category": "Info",
				"type": "text",
				"fieldType": "input",
				"required": false
			}, {
				"options": {
					"Free Marker Template": "ftl",
					"*Handlebar": "hb"
				},
				"name": "value_type",
				"label": "Value type",
				"id": "value_type",
				"title": "Type",
				"category": "Info",
				"type": "text",
				"fieldType": "select",
				"required": false
			}],
			"material_icon_color": "blue",
			"displayname": "DNS Lookup",
			"material_icon_bg_color": "bg_blue",
			"name": "DNS Lookup",
			"material_icon_img": "storage",
			"company": "Appup",
			"id": "dns-fetch",
			"category": "Utilities",
			"info": "DNS Lookup Details"
		}, {
			"thumbnail": "json/nodes/images/Announcement.png",
			"author": "Appup Developer",
			"icon": "json/nodes/icons/Announcement.png",
			"language": "en",
			"branches": "success,failure",
			"type": {
				"name": "emit-event"
			},
			"material_icon": "event",
			"workflow_tasklet_class_name": "com.appup.workflows.external.steps.aws.sns.EmitEventStepExecutor",
			"help": "Emit Event Step",
			"ui": [{
				"name": "topic",
				"label": "Topic",
				"id": "topic",
				"title": "Enter your topic.",
				"category": "Settings",
				"type": "text",
				"fieldType": "input",
				"required": true
			}, {
				"dynamicValue": "CONFIG_NAME",
				"dynamicName": "CONFIG_NAME",
				"name": "plugin_name",
				"label": "Plugin",
				"id": "plugin_name",
				"title": "SNS Event",
				"category": "General",
				"type": "select",
				"fieldType": "dynamicselect",
				"url": "/app/getPluginConfig/{{app_id}}/event-plugin/",
				"required": true
			}, {
				"name": "value",
				"label": "Value",
				"id": "value",
				"title": "Enter your value",
				"category": "Settings",
				"type": "text",
				"fieldType": "input",
				"required": true
			}, {
				"name": "output_variable",
				"label": "Output Variable:",
				"id": "output_variable",
				"title": "Enter your output variable name.",
				"category": "Settings",
				"type": "text",
				"fieldType": "input",
				"required": false
			}, {
				"name": "help",
				"label": "Write your own function here.",
				"id": "help",
				"title": "Enter your label",
				"category": "help",
				"type": "text",
				"fieldType": "input",
				"required": false
			}],
			"material_icon_color": "blue",
			"displayname": "Emit Event",
			"material_icon_bg_color": "bg_blue",
			"name": "Emit Event",
			"material_icon_img": "storage",
			"company": "Appup.com",
			"id": "Emit_Event_Step",
			"category": "Utilities",
			"info": "Event Step"
		}, {
			"thumbnail": "json/nodes/images/DMI.png",
			"author": "Appup Developer",
			"icon": "json/nodes/icons/Variables.png",
			"language": "en",
			"branches": "success,failure",
			"type": {
				"name": "execute-workflows"
			},
			"material_icon": "storage",
			"workflow_tasklet_class_name": "com.appup.workflows.external.steps.WorkflowExecuteStepExecutor",
			"help": "Workflow Execute Step",
			"ui": [{
				"options": {
					"Terminate": "false",
					"Handle": "true"
				},
				"name": "exception_handle",
				"label": "Exception handle",
				"id": "exception_handle",
				"title": "Handle Exception",
				"category": "Settings",
				"type": "select",
				"fieldType": "select",
				"required": false
			}, {
				"dynamicValue": "NAME",
				"dynamicName": "NAME",
				"name": "workflow_id",
				"label": "Workflow NAME",
				"id": "workflow_id",
				"title": "Select Workflow NAME",
				"category": "Settings",
				"type": "select",
				"fieldType": "dynamicselect",
				"url": "/appdb/_db/WORKFLOW?where=APPLICATION_ID={{app_id}}",
				"required": true
			}],
			"material_icon_color": "blue",
			"displayname": "Workflow Execute",
			"material_icon_bg_color": "bg_blue",
			"name": "Workflow Execute Step",
			"material_icon_img": "storage",
			"company": "Appup.com",
			"id": "Workflow_execute",
			"category": "Utilities",
			"info": "Used to call another workflow."
		}, {
			"thumbnail": "json/nodes/images/new/redirect-node.png",
			"author": "Appup Developer",
			"icon": "json/nodes/icons/new/redirect.png",
			"language": "en",
			"branches": "success,failure",
			"type": {
				"name": "facebook-refresh-token"
			},
			"material_icon": "accessible",
			"workflow_tasklet_class_name": "com.appup.workflows.external.steps.identities.FacebookGetRefreshTokenStep",
			"help": "Integrate your oauth here.",
			"ui": [{
				"options": {
					"Free Marker Template": "ftl",
					"*Handlebar": "hb"
				},
				"name": "value_type",
				"label": "Select type",
				"id": "value_type",
				"title": "Type",
				"category": "Info",
				"type": "text",
				"fieldType": "select",
				"required": false
			}, {
				"dynamicValue": "CONFIG_NAME",
				"dynamicName": "CONFIG_NAME",
				"name": "plugin_name",
				"label": "Plugin",
				"id": "plugin_name",
				"title": "Select oauth plugin",
				"category": "Info",
				"type": "select",
				"fieldType": "dynamicselect",
				"url": "/app/get-by-category/{{app_id}}/OAuth/",
				"required": true
			}, {
				"name": "output_variable",
				"label": "Output Variable",
				"id": "output-variable",
				"title": "Enter variable name to hold output",
				"category": "Info",
				"type": "text",
				"fieldType": "input",
				"required": false
			}, {
				"name": "access_token",
				"label": "Access Token",
				"id": "access_token",
				"title": "Access Token",
				"category": "Info",
				"type": "text",
				"fieldType": "textarea",
				"required": false
			}],
			"material_icon_color": "blue",
			"displayname": "FB Refresh Token",
			"material_icon_bg_color": "bg_blue",
			"name": "FB Refresh Token",
			"material_icon_img": "storage",
			"company": "Appup",
			"id": "facebook-refresh-token",
			"category": "Auth",
			"info": "Get refresh token here"
		}, {
			"thumbnail": "json/nodes/images/common/jsonio.png",
			"author": "Appup Developer",
			"icon": "json/nodes/icons/common/jsonio.png",
			"language": "en",
			"branches": "success,failure",
			"type": {
				"name": "firebase-notification"
			},
			"material_icon": "storage",
			"workflow_tasklet_class_name": "com.appup.workflows.core.steps.firebase.FirebaseStepExecutor",
			"help": "firebase-cloud-messaging.",
			"ui": [{
				"options": {
					"Free Marker Template": "ftl",
					"Handlebar": "hb"
				},
				"name": "value_type",
				"label": "Template",
				"id": "value_type",
				"title": "Template",
				"category": "General",
				"type": "select",
				"fieldType": "select",
				"required": false
			}, {
				"name": "method",
				"label": "Enter the method name",
				"id": "method",
				"title": "Enter the method name(POST)",
				"category": "General",
				"type": "text",
				"fieldType": "input",
				"required": true
			}, {
				"name": "device_token",
				"label": "Enter the device token",
				"id": "device_token",
				"title": "Enter the device token",
				"category": "General",
				"type": "text",
				"fieldType": "input",
				"required": true
			}, {
				"name": "output_variable",
				"label": "Result",
				"id": "output_variable",
				"title": "Enter the value",
				"category": "More Settings",
				"type": "text",
				"fieldType": "input",
				"required": false
			}, {
				"name": "body",
				"label": "Enter the notification body",
				"id": "body",
				"title": "Enter the notification body",
				"category": "General",
				"type": "text",
				"fieldType": "input",
				"required": false
			}, {
				"name": "title",
				"label": "Enter the notification title.",
				"id": "title",
				"title": "Enter the notification title",
				"category": "General",
				"type": "text",
				"fieldType": "input",
				"required": false
			}, {
				"name": "content_type",
				"label": "Enter the content type.",
				"id": "content_type",
				"title": "Enter the content type",
				"category": "General",
				"type": "text",
				"fieldType": "input",
				"required": false
			}, {
				"dynamicValue": "CONFIG_NAME",
				"dynamicName": "CONFIG_NAME",
				"name": "plugin_name",
				"label": "firebase Plugin",
				"id": "plugin_name",
				"title": "firebase",
				"category": "General",
				"type": "select",
				"fieldType": "dynamicselect",
				"url": "/app/getPluginConfig/{{app_id}}/firebase-notification-plugin/",
				"required": true
			}],
			"material_icon_color": "blue",
			"displayname": "Firebase Cloud Messaging",
			"material_icon_bg_color": "bg_blue",
			"name": "Firebase Cloud Messaging",
			"material_icon_img": "storage",
			"company": "Appup.com",
			"id": "firebase_cloud_messaging",
			"category": "Google",
			"info": "Firebase Cloud Messaging."
		}, {
			"thumbnail": "json/nodes/images/common/jsonio.png",
			"author": "Appup Developer",
			"icon": "json/nodes/icons/common/jsonio.png",
			"language": "en",
			"branches": "success,failure",
			"type": {
				"name": "gae-delete"
			},
			"material_icon": "delete",
			"workflow_tasklet_class_name": "com.appup.workflows.core.steps.gae.GAEDeleteStepExecutor",
			"help": "Integrate your namespace and enitity to execute gae queries.",
			"ui": [{
				"dynamicValue": "CONFIG_NAME",
				"dynamicName": "CONFIG_NAME",
				"name": "plugin_name",
				"label": "GAE Database",
				"id": "plugin_name",
				"title": "GAE Database",
				"category": "General",
				"type": "select",
				"fieldType": "dynamicselect",
				"url": "/app/getPluginConfig/{{app_id}}/gae-plugin/",
				"required": true
			}, {
				"options": {
					"Free Marker Template": "ftl",
					"Handlebar": "hb"
				},
				"name": "value_type",
				"label": "Type",
				"id": "value_type",
				"title": "Type",
				"category": "General",
				"type": "text",
				"fieldType": "input",
				"required": false
			}, {
				"name": "output_variable",
				"label": "Output Variable",
				"id": "output_variable",
				"title": "Output Variable",
				"category": "Settings",
				"type": "text",
				"fieldType": "input",
				"required": false
			}],
			"material_icon_color": "blue",
			"displayname": "GAE Delete",
			"material_icon_bg_color": "bg_blue",
			"name": "GAE Delete",
			"material_icon_img": "storage",
			"company": "Appup.com",
			"id": "gae_delete",
			"category": "Google",
			"info": "Integrate your namespace and enitity to execute gae queries."
		}, {
			"thumbnail": "son/nodes/images/common/jsonio.png",
			"author": "Appup Developer",
			"icon": "json/nodes/icons/common/jsonio.png",
			"language": "en",
			"branches": "success,failure",
			"type": {
				"name": "gae-select"
			},
			"material_icon": "select_all",
			"workflow_tasklet_class_name": "com.appup.workflows.core.steps.gae.GAESelectStepExecutor",
			"help": "Integrate your namespace and enitity to execute gae queries.",
			"ui": [{
				"dynamicValue": "CONFIG_NAME",
				"dynamicName": "CONFIG_NAME",
				"name": "plugin_name",
				"label": "GAE Database",
				"id": "plugin_name",
				"title": "GAE Database",
				"category": "General",
				"type": "select",
				"fieldType": "dynamicselect",
				"url": "/app/getPluginConfig/{{app_id}}/gae-plugin/",
				"required": true
			}, {
				"options": {
					"Free Marker Template": "ftl",
					"*Handlebar": "hb"
				},
				"name": "value_type",
				"label": "Type",
				"id": "value_type",
				"title": "Type",
				"category": "General",
				"type": "text",
				"fieldType": "input",
				"required": false
			}, {
				"name": "output_variable",
				"label": "Output Variable",
				"id": "output_variable",
				"title": "Output Variable",
				"category": "Settings",
				"type": "text",
				"fieldType": "input",
				"required": false
			}],
			"material_icon_color": "blue",
			"displayname": "GAE Select",
			"material_icon_bg_color": "bg_blue",
			"name": "GAE Select",
			"material_icon_img": "storage",
			"company": "Appup.com",
			"id": "gae_select",
			"category": "Google",
			"info": "Integrate your namespace and enitity to execute gae queries."
		}, {
			"thumbnail": "json/nodes/images/DBRestAPI.png",
			"author": "Appup Developer",
			"icon": "json/nodes/icons/DBRestAPI.png",
			"language": "en",
			"branches": "success,failure",
			"type": {
				"name": "google-drive-file-download"
			},
			"material_icon": "cloud_upload",
			"workflow_tasklet_class_name": "com.appup.workflows.external.steps.identities.google.drive.GoogleDriveFileDownloadStepExecutor",
			"help": "Google Drive File Download Step",
			"ui": [{
				"name": "file_id",
				"label": "File Id",
				"id": "file_id",
				"title": "Enter File Id",
				"category": "General",
				"type": "text",
				"fieldType": "input",
				"required": true
			}, {
				"name": "access_token",
				"label": "Access Token",
				"id": "access_token",
				"title": "Google Access Token",
				"category": "General",
				"type": "text",
				"fieldType": "input",
				"required": true
			}, {
				"name": "output_variable",
				"label": "Output Variable",
				"id": "output_variable",
				"title": "Output Variable",
				"category": "General",
				"type": "text",
				"fieldType": "input",
				"required": false
			}, {
				"options": {
					"Free Marker Template": "ftl",
					"*Handlebar": "hb"
				},
				"name": "value_type",
				"label": "Type",
				"id": "value_type",
				"title": "Enter the Type",
				"category": "General",
				"type": "select",
				"fieldType": "select",
				"required": false
			}],
			"material_icon_color": "blue",
			"displayname": "Google Drive File Download",
			"material_icon_bg_color": "bg_blue",
			"name": "Google Drive File Download",
			"material_icon_img": "storage",
			"company": "Appup.com",
			"id": "google_drive_file_download",
			"category": "Google",
			"info": "File Download Step"
		}, {
			"thumbnail": "json/nodes/images/DBRestAPI.png",
			"author": "Appup Developer",
			"icon": "json/nodes/icons/DBRestAPI.png",
			"language": "en",
			"branches": "success,failure",
			"type": {
				"name": "google-drive-file-upload"
			},
			"material_icon": "cloud_upload",
			"workflow_tasklet_class_name": "com.appup.workflows.external.steps.identities.google.drive.GoogleDriveFileUploadStepExecutor",
			"help": "Google Drive File Upload Step",
			"ui": [{
				"name": "file_name",
				"label": "File Name",
				"id": "file_name",
				"title": "Enter the File Name",
				"category": "General",
				"type": "text",
				"fieldType": "input",
				"required": false
			}, {
				"name": "file_data",
				"label": "File Data",
				"id": "file_data",
				"title": "Enter the File Data",
				"category": "General",
				"type": "text",
				"fieldType": "input",
				"required": true
			}, {
				"name": "folder_id",
				"label": "Folder Id",
				"id": "folder_id",
				"title": "Enter the Folder Id",
				"category": "General",
				"type": "text",
				"fieldType": "input",
				"required": false
			}, {
				"name": "description",
				"label": "Description",
				"id": "description",
				"title": "Description of file",
				"category": "General",
				"type": "textarea",
				"fieldType": "textarea",
				"required": false
			}, {
				"options": {
					"True": "true",
					"*False": "false"
				},
				"name": "file_access",
				"label": "Is Secured",
				"id": "file_access",
				"title": "Select the appropriate accessibility for given file",
				"category": "General",
				"type": "select",
				"fieldType": "select",
				"required": false
			}, {
				"name": "access_token",
				"label": "Access Token",
				"id": "access_token",
				"title": "Google Access Token",
				"category": "General",
				"type": "text",
				"fieldType": "input",
				"required": true
			}, {
				"name": "output_variable",
				"label": "Output Variable",
				"id": "output_variable",
				"title": "Output Variable",
				"category": "General",
				"type": "text",
				"fieldType": "input",
				"required": true
			}, {
				"options": {
					"Free Marker Template": "ftl",
					"*Handlebar": "hb"
				},
				"name": "value_type",
				"label": "Type",
				"id": "value_type",
				"title": "Enter the Type",
				"category": "General",
				"type": "select",
				"fieldType": "select",
				"required": false
			}],
			"material_icon_color": "blue",
			"displayname": "Google Drive File Upload",
			"material_icon_bg_color": "bg_blue",
			"name": "Google Drive File Upload",
			"material_icon_img": "storage",
			"company": "Appup.com",
			"id": "google_drive_file_upload",
			"category": "Google",
			"info": "File Upload Step"
		}, {
			"thumbnail": "json/nodes/images/DBRestAPI.png",
			"author": "Appup Developer",
			"icon": "json/nodes/icons/DBRestAPI.png",
			"language": "en",
			"branches": "success,failure",
			"type": {
				"name": "google-spreadsheet-read"
			},
			"material_icon": "cloud_upload",
			"workflow_tasklet_class_name": "com.appup.workflows.external.steps.identities.google.sheets.GoogleSpreadSheetReadStepExecutor",
			"help": "Google Sheet Read Step",
			"ui": [{
				"name": "sheet_id",
				"label": "Sheet Id",
				"id": "sheet_id",
				"title": "Enter Sheet Id",
				"category": "General",
				"type": "text",
				"fieldType": "input",
				"required": true
			}, {
				"name": "range",
				"label": "Range",
				"id": "range",
				"title": "Enter Range Ex.A1:D5",
				"category": "General",
				"type": "text",
				"fieldType": "input",
				"required": true
			}, {
				"name": "access_token",
				"label": "Access Token",
				"id": "access_token",
				"title": "Google Access Token",
				"category": "General",
				"type": "text",
				"fieldType": "input",
				"required": true
			}, {
				"name": "output_variable",
				"label": "Output Variable",
				"id": "output_variable",
				"title": "Output Variable",
				"category": "General",
				"type": "text",
				"fieldType": "input",
				"required": false
			}, {
				"options": {
					"Free Marker Template": "ftl",
					"*Handlebar": "hb"
				},
				"name": "value_type",
				"label": "Type",
				"id": "value_type",
				"title": "Enter the Type",
				"category": "General",
				"type": "select",
				"fieldType": "select",
				"required": false
			}],
			"material_icon_color": "blue",
			"displayname": "Google Sheet Read Step",
			"material_icon_bg_color": "bg_blue",
			"name": "Google Sheet Read Step",
			"material_icon_img": "storage",
			"company": "Appup.com",
			"id": "Google Sheet Read Step",
			"category": "Google",
			"info": "Google Sheet Read Step"
		}, {
			"thumbnail": "json/nodes/images/DBRestAPI.png",
			"author": "Appup Developer",
			"icon": "json/nodes/icons/DBRestAPI.png",
			"language": "en",
			"branches": "success,failure",
			"type": {
				"name": "google-spreadsheet-write"
			},
			"material_icon": "cloud_upload",
			"workflow_tasklet_class_name": "com.appup.workflows.external.steps.identities.google.sheets.GoogleSpreadsheetWriteStepExecutor",
			"help": "Google Sheet Write Step",
			"ui": [{
				"name": "sheet_id",
				"label": "Sheet Id",
				"id": "sheet_id",
				"title": "Enter Sheet Id",
				"category": "General",
				"type": "text",
				"fieldType": "input",
				"required": true
			}, {
				"name": "range",
				"label": "Range",
				"id": "range",
				"title": "Enter Range Ex.A1:D5",
				"category": "General",
				"type": "text",
				"fieldType": "input",
				"required": true
			}, {
				"name": "data",
				"label": "Data",
				"id": "data",
				"title": "Enter Data as Array-of-Arrays EX: [[1,2,3],[\"sample\",\"example\",\"test\"]]",
				"category": "General",
				"type": "text",
				"fieldType": "textarea",
				"required": true
			}, {
				"name": "access_token",
				"label": "Access Token",
				"id": "access_token",
				"title": "Access Token",
				"category": "General",
				"type": "text",
				"fieldType": "input",
				"required": true
			}, {
				"name": "insert_data_option",
				"label": "Enter Insert Data Option",
				"id": "insert_data_option",
				"title": "Enter Insert Data Option",
				"category": "General",
				"type": "text",
				"fieldType": "input",
				"required": false
			}, {
				"name": "value_input_option",
				"label": "Enter Value Input Option EX: RAW",
				"id": "value_input_option",
				"title": "Enter Value Input Option",
				"category": "General",
				"type": "text",
				"fieldType": "input",
				"required": true
			}, {
				"name": "major_dimension",
				"label": "Enter Major Dimension EX: ROWS",
				"id": "major_dimension",
				"title": "Enter Value Input Option",
				"category": "General",
				"type": "text",
				"fieldType": "input",
				"required": true
			}, {
				"name": "output_variable",
				"label": "Output Variable",
				"id": "output_variable",
				"title": "Output Variable",
				"category": "General",
				"type": "text",
				"fieldType": "input",
				"required": false
			}, {
				"options": {
					"Free Marker Template": "ftl",
					"*Handlebar": "hb"
				},
				"name": "value_type",
				"label": "Type",
				"id": "value_type",
				"title": "Enter the Type",
				"category": "General",
				"type": "select",
				"fieldType": "select",
				"required": false
			}, {
				"name": "include_values_in_response",
				"label": "Include Values in Response?",
				"id": "include_values_in_response",
				"title": "Select whether updated values should be included in response or not.",
				"category": "Settings",
				"type": "select",
				"fieldType": "select",
				"options": {
					"true": "true",
					"false": "false"
				},
				"required": false
			}],
			"material_icon_color": "blue",
			"displayname": "Google Sheet Write Step",
			"material_icon_bg_color": "bg_blue",
			"name": "Google Sheet Write Step",
			"material_icon_img": "storage",
			"company": "Appup.com",
			"id": "Google Sheet Write Step",
			"category": "Google",
			"info": "Google Sheet Write Step"
		}, {
			"thumbnail": "json/nodes/images/common/jsonio.png",
			"author": "Appup Developer",
			"icon": "json/nodes/icons/common/jsonio.png",
			"language": "en",
			"branches": "success,failure",
			"type": {
				"name": "code-groovy-without-main"
			},
			"material_icon": "code",
			"workflow_tasklet_class_name": "com.appup.workflows.external.steps.code.executors.GroovyCodeStepExecutor",
			"help": "Groovy-Script external file with-out main method.",
			"ui": [{
				"dynamicValue": "CONFIG_NAME",
				"dynamicName": "CONFIG_NAME",
				"name": "plugin_name",
				"label": "Groovy:",
				"id": "plugin_name",
				"title": "Groovy Inline",
				"category": "Settings",
				"type": "select",
				"fieldType": "dynamicselect",
				"url": "/app/getPluginConfig/{{app_id}}/code-groovy-plugin/",
				"required": true
			}, {
				"name": "inLineScript",
				"label": "Source:",
				"id": "inLineScript",
				"title": "Root Resource.",
				"category": "Settings",
				"type": "textarea",
				"fieldType": "textarea",
				"required": true
			}, {
				"name": "function_name",
				"label": "Function",
				"id": "function_name",
				"title": "Enter the name of the function to be executed (case-sensitive).",
				"category": "Settings",
				"type": "text",
				"fieldType": "input",
				"required": true
			}, {
				"value": "{}",
				"name": "dynamicParams",
				"id": "dynamicParams",
				"title": "Dynamic Params",
				"category": "Settings",
				"type": "hidden",
				"fieldType": "input",
				"required": false
			}, {
				"name": "returnOutputVariable",
				"label": "Return Output Variable",
				"id": "returnOutputVariable",
				"title": "Enter the Return Output Variable",
				"category": "Settings",
				"type": "text",
				"fieldType": "input",
				"required": false
			}],
			"material_icon_color": "blue",
			"displayname": "Groovy Code",
			"material_icon_bg_color": "bg_blue",
			"name": "Groovy Code",
			"material_icon_img": "storage",
			"company": "Appup.com",
			"id": "code-groovy-without-main",
			"category": "Developers",
			"info": "Groovy-script external file with-out main method."
		}, {
			"thumbnail": "json/nodes/images/common/jsonio.png",
			"author": "Appup Developer",
			"icon": "json/nodes/icons/common/jsonio.png",
			"language": "en",
			"branches": "success,failure",
			"type": {
				"name": "code-groovy-inline"
			},
			"material_icon": "code",
			"workflow_tasklet_class_name": "com.appup.workflows.external.steps.code.executors.GroovyInlineCodeStepExecutor",
			"help": "Groovy-Script inline code step",
			"ui": [{
				"dynamicValue": "CONFIG_NAME",
				"dynamicName": "CONFIG_NAME",
				"name": "plugin_name",
				"label": "Groovy:",
				"id": "plugin_name",
				"title": "Groovy Inline",
				"category": "Settings",
				"type": "select",
				"fieldType": "dynamicselect",
				"url": "/app/getPluginConfig/{{app_id}}/code-groovy-plugin/",
				"required": true
			}, {
				"name": "inLineScript",
				"label": "Source:",
				"id": "inLineScript",
				"title": "Root Resource.",
				"category": "Settings",
				"type": "textarea",
				"fieldType": "textarea",
				"required": true
			}, {
				"name": "function_name",
				"label": "Function",
				"id": "function_name",
				"title": "Enter the name of the function to be executed (case-sensitive).",
				"category": "Settings",
				"type": "text",
				"fieldType": "input",
				"required": true
			}, {
				"value": "{}",
				"name": "dynamicParams",
				"id": "dynamicParams",
				"title": "Dynamic Params",
				"category": "Settings",
				"type": "hidden",
				"fieldType": "input",
				"required": false
			}, {
				"options": {
					"true": "true",
					"*false": "false"
				},
				"name": "returnOutputVariable",
				"label": "Return Output Variable",
				"id": "returnOutputVariable",
				"title": "Return Output Variable",
				"category": "Settings",
				"type": "select",
				"fieldType": "select",
				"required": false
			}],
			"material_icon_color": "blue",
			"displayname": "Groovy Inline Code",
			"material_icon_bg_color": "bg_blue",
			"name": "Groovy Code",
			"material_icon_img": "storage",
			"company": "Appup.com",
			"id": "code-groovy-inline",
			"category": "Developers",
			"info": "Groovy-script inline code"
		}, {
			"thumbnail": "json/nodes/images/common/jsonio.png",
			"author": "Appup Developer",
			"icon": "json/nodes/icons/common/jsonio.png",
			"language": "en",
			"branches": "success,failure",
			"type": {
				"name": "code-groovy-without-main"
			},
			"material_icon": "code",
			"workflow_tasklet_class_name": "com.appup.workflows.external.steps.code.executors.GroovyCodeStepExecutor",
			"help": "Groovy-Script external file with-out main method.",
			"ui": [{
				"name": "rootSrc",
				"label": "Source:",
				"id": "rootSrc",
				"title": "Root Resource.",
				"category": "Settings",
				"type": "text",
				"fieldType": "input",
				"required": true
			}, {
				"name": "function_name",
				"label": "Function",
				"id": "function_name",
				"title": "Enter the name of the function to be executed (case-sensitive).",
				"category": "Settings",
				"type": "text",
				"fieldType": "input",
				"required": true
			}, {
				"value": "{}",
				"name": "dynamicParams",
				"label": "Dynamic Params",
				"id": "dynamicParams",
				"title": "Dynamic Params",
				"category": "Settings",
				"type": "text",
				"fieldType": "input",
				"required": false
			}, {
				"name": "returnOutputVariable",
				"label": "Return Output Variable",
				"id": "returnOutputVariable",
				"title": "Enter the Return Output Variable",
				"category": "Settings",
				"type": "text",
				"fieldType": "input",
				"required": false
			}],
			"material_icon_color": "blue",
			"displayname": "Groovy Code without Main",
			"material_icon_bg_color": "bg_blue",
			"name": "Groovy Code without Main",
			"material_icon_img": "storage",
			"company": "Appup.com",
			"id": "code-groovy-without-main",
			"category": "Developers",
			"info": "Groovy-script external file with-out main method."
		}, {
			"thumbnail": "json/nodes/images/DBRestAPI.png",
			"author": "Appup Developer",
			"icon": "json/nodes/icons/DBRestAPI.png",
			"language": "en",
			"branches": "success,failure",
			"type": {
				"name": "hash-func-digest"
			},
			"material_icon": "cloud_upload",
			"workflow_tasklet_class_name": "com.appup.workflows.core.steps.cyrpto.HashFuncStepExecutor",
			"help": "Digest the file data",
			"ui": [{
				"name": "file_data",
				"label": "File Data",
				"id": "file_data",
				"title": "Enter the File Data",
				"category": "General",
				"type": "text",
				"fieldType": "input",
				"required": true
			}, {
				"options": {
					"MD2": "MD2",
					"*MD5": "MD5",
					"SHA-1": "SHA-1",
					"SHA-224": "SHA-224",
					"SHA-256": "SHA-256",
					"SHA-384": "SHA-384",
					"SHA-512": "SHA-512"
				},
				"name": "algorithm",
				"label": "Select Algorithm",
				"id": "algorithm",
				"title": "Select Algorithm",
				"category": "Settings",
				"type": "select",
				"fieldType": "select",
				"required": true
			}, {
				"name": "output_variable",
				"label": "Output Variable",
				"id": "output_variable",
				"title": "Output Variable",
				"category": "General",
				"type": "text",
				"fieldType": "input",
				"required": false
			}, {
				"options": {
					"Free Marker Template": "ftl",
					"*Handlebar": "hb"
				},
				"name": "value_type",
				"label": "Type",
				"id": "value_type",
				"title": "Enter the Type",
				"category": "General",
				"type": "select",
				"fieldType": "select",
				"required": false
			}],
			"material_icon_color": "blue",
			"displayname": "Hash Function Digest Step",
			"material_icon_bg_color": "bg_blue",
			"name": "Hash Function Digest Step",
			"material_icon_img": "storage",
			"company": "Appup.com",
			"id": "hash_function_digest",
			"category": "Utilities",
			"info": "File Digest Step"
		}, {
			"thumbnail": "json/nodes/images/DBRestAPI.png",
			"author": "Appup Developer",
			"icon": "json/nodes/icons/DBRestAPI.png",
			"language": "en",
			"branches": "success,failure",
			"type": {
				"name": "hmac-hash"
			},
			"material_icon": "cloud_upload",
			"workflow_tasklet_class_name": "com.appup.workflows.core.steps.cyrpto.HMacStepExecutor",
			"help": "HMac Key Message Digest",
			"ui": [{
				"name": "message",
				"label": "Message",
				"id": "message",
				"title": "Enter the Message",
				"category": "General",
				"type": "text",
				"fieldType": "input",
				"required": true
			}, {
				"name": "key",
				"label": "Key",
				"id": "key",
				"title": "Enter the Key",
				"category": "General",
				"type": "text",
				"fieldType": "input",
				"required": true
			}, {
				"options": {
					"*HmacMD5": "HmacMD5",
					"HmacSHA1": "HmacSHA1",
					"HmacSHA256": "HmacSHA256",
					"HmacSHA384": "HmacSHA384",
					"HmacSHA512": "HmacSHA512"
				},
				"name": "algorithm",
				"label": "Select Algorithm",
				"id": "algorithm",
				"title": "Select Algorithm",
				"category": "Settings",
				"type": "select",
				"fieldType": "select",
				"required": true
			}, {
				"name": "output_variable",
				"label": "Output Variable",
				"id": "output_variable",
				"title": "Output Variable",
				"category": "General",
				"type": "text",
				"fieldType": "input",
				"required": false
			}, {
				"options": {
					"Free Marker Template": "ftl",
					"*Handlebar": "hb"
				},
				"name": "value_type",
				"label": "Type",
				"id": "value_type",
				"title": "Enter the Type",
				"category": "General",
				"type": "select",
				"fieldType": "select",
				"required": false
			}],
			"material_icon_color": "blue",
			"displayname": "HMac Digest Step",
			"material_icon_bg_color": "bg_blue",
			"name": "HMac Digest Step",
			"material_icon_img": "storage",
			"company": "Appup.com",
			"id": "HMac_Digest_Step",
			"category": "Utilities",
			"info": "HMac Digest Step"
		}, {
			"thumbnail": "json/nodes/images/sms/Condition.png",
			"author": "Appup Developer",
			"icon": "json/nodes/icons/sms/Condition.png",
			"language": "en",
			"branches": "success,failure",
			"type": {
				"name": "if-condition"
			},
			"material_icon": "compare_arrows",
			"workflow_tasklet_class_name": "com.appup.workflows.core.steps.IfConditionStepExecutor",
			"help": "If Condition Step",
			"ui": [{
				"name": "output_variable",
				"label": "Output Variable",
				"id": "output_variable",
				"title": "Enter the name.",
				"category": "Settings",
				"type": "text",
				"fieldType": "input",
				"required": false
			}, {
				"options": {
					"strlen": "strlen",
					"value": "value"
				},
				"name": "if_type",
				"label": "If",
				"id": "if_type",
				"title": "Variable type.",
				"category": "Settings",
				"type": "select",
				"fieldType": "select",
				"required": true
			}, {
				"name": "variable1",
				"label": "variable1",
				"id": "variable1",
				"title": "Enter value",
				"category": "Settings",
				"type": "text",
				"fieldType": "input",
				"required": true
			}, {
				"options": {
					"less than": "less_than",
					"greater than or equals": "greater_than_or_equals",
					"equal to": "equal_to",
					"contains": "contains",
					"less than or equals": "less_than_or_equals",
					"not equal to": "not_equal_to",
					"greater than": "greater_than",
					"in": "in"
				},
				"name": "comparator",
				"label": "Compare this",
				"id": "if_type",
				"title": "Operation type.",
				"category": "Settings",
				"type": "select",
				"fieldType": "select",
				"required": true
			}, {
				"name": "variable2",
				"label": "variable2",
				"id": "variable2",
				"title": "Enter value",
				"category": "Settings",
				"type": "text",
				"fieldType": "input",
				"required": true
			}, {
				"options": {
					"Free Marker Template": "ftl",
					"*Handlebar": "hb"
				},
				"name": "value_type",
				"label": "Select type",
				"id": "value_type",
				"title": "Type",
				"category": "Settings",
				"type": "text",
				"fieldType": "select",
				"required": false
			}],
			"material_icon_color": "blue",
			"displayname": "If Condition",
			"material_icon_bg_color": "bg_blue",
			"name": "If Condition",
			"material_icon_img": "storage",
			"company": "Appup.com",
			"id": "If_Condition_Step",
			"category": "Utilities",
			"info": "Condition Step"
		}, {
			"thumbnail": "json/nodes/images/DBRestAPI.png",
			"author": "Appup Developer",
			"icon": "json/nodes/icons/DBRestAPI.png",
			"language": "en",
			"branches": "success,failure",
			"type": {
				"name": "jar-create"
			},
			"material_icon": "cloud_upload",
			"workflow_tasklet_class_name": "com.appup.workflows.external.steps.code.compiler.JarCreateStepExecutor",
			"help": "Jar Create Step",
			"ui": [{
				"name": "code_data",
				"label": "Code Data",
				"id": "code_data",
				"title": "Enter Output variable of sql",
				"category": "General",
				"type": "text",
				"fieldType": "input",
				"required": true
			}, {
				"name": "project_name",
				"label": "Project Name",
				"id": "project_name",
				"title": "Enter Project Name",
				"category": "General",
				"type": "text",
				"fieldType": "input",
				"required": true
			}, {
				"name": "pom_data",
				"label": "Pom Data",
				"id": "pom_data",
				"title": "Enter Pom Data",
				"category": "General",
				"type": "text",
				"fieldType": "input",
				"required": true
			}, {
				"options": {
					"Free Marker Template": "ftl",
					"*Handlebar": "hb"
				},
				"name": "value_type",
				"label": "Type",
				"id": "value_type",
				"title": "Enter the Type",
				"category": "General",
				"type": "select",
				"fieldType": "select",
				"required": false
			}, {
				"name": "output_variable",
				"label": "Output Variable",
				"id": "output_variable",
				"title": "Output Variable",
				"category": "General",
				"type": "text",
				"fieldType": "input",
				"required": false
			}],
			"material_icon_color": "blue",
			"displayname": "Jar Create",
			"material_icon_bg_color": "bg_blue",
			"name": "Jar Create",
			"material_icon_img": "storage",
			"company": "Appup.com",
			"id": "jar-create",
			"category": "Developers",
			"info": "User Jar Creation"
		}, {
			"thumbnail": "json/nodes/images/DBRestAPI.png",
			"author": "Appup Developer",
			"icon": "json/nodes/icons/DBRestAPI.png",
			"language": "en",
			"branches": "success,failure",
			"type": {
				"name": "java-compile"
			},
			"material_icon": "cloud_upload",
			"workflow_tasklet_class_name": "com.appup.workflows.external.steps.code.compiler.JavaCompileStepExecutor",
			"help": "Compile Java Code",
			"ui": [{
				"name": "java_code",
				"label": "Java Code",
				"id": "java_code",
				"title": "Enter Your Java Code",
				"category": "General",
				"type": "text",
				"fieldType": "textarea",
				"required": true
			}, {
				"name": "file_name",
				"label": "File Name",
				"id": "file_name",
				"title": "Enter Java File Name it should be class name",
				"category": "General",
				"type": "text",
				"fieldType": "input",
				"required": true
			}, {
				"dynamicValue": "CONFIG_NAME",
				"dynamicName": "CONFIG_NAME",
				"name": "plugin_name",
				"label": "Java Plugin",
				"id": "plugin_name",
				"title": "Identity",
				"category": "General",
				"type": "select",
				"fieldType": "dynamicselect",
				"url": "/app/getPluginConfig/{{app_id}}/java-plugin/",
				"required": true
			}, {
				"options": {
					"Free Marker Template": "ftl",
					"*Handlebar": "hb"
				},
				"name": "value_type",
				"label": "Type",
				"id": "value_type",
				"title": "Enter the Type",
				"category": "General",
				"type": "select",
				"fieldType": "select",
				"required": false
			}, {
				"name": "message",
				"label": "Output Variable",
				"id": "message",
				"title": "Output Variable",
				"category": "General",
				"type": "text",
				"fieldType": "input",
				"required": false
			}],
			"material_icon_color": "blue",
			"displayname": "Java Compile",
			"material_icon_bg_color": "bg_blue",
			"name": "Java Compiler",
			"material_icon_img": "storage",
			"company": "Appup.com",
			"id": "java-compile",
			"category": "Developers",
			"info": "Compile Java Code"
		}, {
			"thumbnail": "json/nodes/images/DBRestAPI.png",
			"author": "Appup Developer",
			"icon": "json/nodes/icons/DBRestAPI.png",
			"language": "en",
			"branches": "success,failure",
			"type": {
				"name": "java-custom-compiler"
			},
			"material_icon": "cloud_upload",
			"workflow_tasklet_class_name": "com.appup.workflows.external.steps.code.compiler.JavaCompilerCustomStepExecutor",
			"help": "Compile Java Code",
			"ui": [{
				"name": "java_code",
				"label": "Java Code",
				"id": "java_code",
				"title": "Enter Your Java Code",
				"category": "General",
				"type": "text",
				"fieldType": "textarea",
				"required": true
			}, {
				"name": "file_name",
				"label": "File Name",
				"id": "file_name",
				"title": "Enter Java File Name it should be class name",
				"category": "General",
				"type": "text",
				"fieldType": "input",
				"required": true
			}, {
				"name": "pom_data",
				"label": "Pom Data",
				"id": "pom_data",
				"title": "Enter Pom Data",
				"category": "General",
				"type": "text",
				"fieldType": "textarea",
				"required": true
			}, {
				"name": "project_name",
				"label": "Project Name",
				"id": "project_name",
				"title": "Enter Project Name",
				"category": "General",
				"type": "text",
				"fieldType": "input",
				"required": true
			}, {
				"options": {
					"Free Marker Template": "ftl",
					"*Handlebar": "hb"
				},
				"name": "value_type",
				"label": "Type",
				"id": "value_type",
				"title": "Enter the Type",
				"category": "General",
				"type": "select",
				"fieldType": "select",
				"required": false
			}, {
				"name": "message",
				"label": "Output Variable",
				"id": "message",
				"title": "Output Variable",
				"category": "General",
				"type": "text",
				"fieldType": "input",
				"required": false
			}],
			"material_icon_color": "blue",
			"displayname": "Java Compiler Custom",
			"material_icon_bg_color": "bg_blue",
			"name": "Java Custom Compiler",
			"material_icon_img": "storage",
			"company": "Appup.com",
			"id": "java-custom-compiler",
			"category": "Developers",
			"info": "Compile Java Code"
		}, {
			"thumbnail": "json/nodes/images/common/jsonio.png",
			"author": "Appup Developer",
			"icon": "json/nodes/icons/common/jsonio.png",
			"language": "en",
			"branches": "success,failure",
			"type": {
				"name": "jedis-del"
			},
			"material_icon": "storage",
			"workflow_tasklet_class_name": "com.appup.workflows.external.steps.jedis.JedisDeleteStepExecutor",
			"help": "jedis delete.",
			"ui": [{
				"options": {
					"Free Marker Template": "ftl",
					"Handlebar": "hb"
				},
				"name": "value_type",
				"label": "Template",
				"id": "value_type",
				"title": "Template",
				"category": "General",
				"type": "select",
				"fieldType": "select",
				"required": false
			}, {
				"options": {
					"*String": "String"
				},
				"name": "data_type",
				"label": "select data type",
				"id": "data_type",
				"title": "select data type.",
				"category": "General",
				"type": "select",
				"fieldType": "select",
				"required": false
			}, {
				"name": "key",
				"label": "Enter the key value",
				"id": "key",
				"title": "Enter the key value",
				"category": "General",
				"type": "text",
				"fieldType": "input",
				"required": false
			}, {
				"dynamicValue": "CONFIG_NAME",
				"dynamicName": "CONFIG_NAME",
				"name": "plugin_name",
				"label": "Jedis Plugin",
				"id": "plugin_name",
				"title": "Jedis",
				"category": "General",
				"type": "select",
				"fieldType": "dynamicselect",
				"url": "/app/getPluginConfig/{{app_id}}/jedis-plugin/",
				"required": true
			}],
			"material_icon_color": "blue",
			"displayname": "Jedis Delete",
			"material_icon_bg_color": "bg_blue",
			"name": "Jedis Delete",
			"material_icon_img": "storage",
			"company": "Appup.com",
			"id": "jedis delete",
			"category": "Developers",
			"info": "Jedis Delete."
		}, {
			"thumbnail": "json/nodes/images/common/jsonio.png",
			"author": "Appup Developer",
			"icon": "json/nodes/icons/common/jsonio.png",
			"language": "en",
			"branches": "success,failure",
			"type": {
				"name": "jedis-get"
			},
			"material_icon": "storage",
			"workflow_tasklet_class_name": "com.appup.workflows.external.steps.jedis.JedisGetStepExecutor",
			"help": "jedis get.",
			"ui": [{
				"options": {
					"Free Marker Template": "ftl",
					"Handlebar": "hb"
				},
				"name": "value_type",
				"label": "Template",
				"id": "value_type",
				"title": "Template",
				"category": "General",
				"type": "select",
				"fieldType": "select",
				"required": false
			}, {
				"options": {
					"*String": "String"
				},
				"name": "data_type",
				"label": "select data type",
				"id": "data_type",
				"title": "select data type.",
				"category": "General",
				"type": "select",
				"fieldType": "select",
				"required": false
			}, {
				"name": "key",
				"label": "Enter the key ",
				"id": "key",
				"title": "Enter the key which value you want ",
				"category": "General",
				"type": "text",
				"fieldType": "input",
				"required": true
			}, {
				"dynamicValue": "CONFIG_NAME",
				"dynamicName": "CONFIG_NAME",
				"name": "plugin_name",
				"label": "Jedis Plugin",
				"id": "plugin_name",
				"title": "Jedis",
				"category": "General",
				"type": "select",
				"fieldType": "dynamicselect",
				"url": "/app/getPluginConfig/{{app_id}}/jedis-plugin/",
				"required": true
			}, {
				"name": "output_variable",
				"label": "Output Variable",
				"id": "output_variable",
				"title": "Enter output variable",
				"category": "General",
				"type": "text",
				"fieldType": "input",
				"required": true
			}],
			"material_icon_color": "blue",
			"displayname": "Jedis Get",
			"material_icon_bg_color": "bg_blue",
			"name": "Jedis Get",
			"material_icon_img": "storage",
			"company": "Appup.com",
			"id": "jedis_get",
			"category": "Developers",
			"info": "Jedis Get."
		}, {
			"thumbnail": "json/nodes/images/common/jsonio.png",
			"author": "Appup Developer",
			"icon": "json/nodes/icons/common/jsonio.png",
			"language": "en",
			"branches": "success,failure",
			"type": {
				"name": "jedis-put"
			},
			"material_icon": "storage",
			"workflow_tasklet_class_name": "com.appup.workflows.external.steps.jedis.JedisPutStepExecutor",
			"help": "jedis put.",
			"ui": [{
				"options": {
					"Free Marker Template": "ftl",
					"Handlebar": "hb"
				},
				"name": "value_type",
				"label": "Template",
				"id": "value_type",
				"title": "Template",
				"category": "General",
				"type": "select",
				"fieldType": "select",
				"required": false
			}, {
				"options": {
					"*String": "String"
				},
				"name": "data_type",
				"label": "select data type",
				"id": "data_type",
				"title": "select data type.",
				"category": "General",
				"type": "select",
				"fieldType": "select",
				"required": false
			}, {
				"name": "key",
				"label": "Enter the key ",
				"id": "key",
				"title": "Enter the key ",
				"category": "General",
				"type": "text",
				"fieldType": "input",
				"required": false
			}, {
				"name": "value_to_save",
				"label": "Enter the value",
				"id": "value_to_save",
				"title": "Enter the value ",
				"category": "General",
				"type": "text",
				"fieldType": "input",
				"required": false
			}, {
				"name": "expire_time",
				"label": "Expire Time",
				"id": "expire_time",
				"title": "Enter the expire time of key in seconds ",
				"category": "General",
				"type": "text",
				"fieldType": "input",
				"required": false
			}, {
				"dynamicValue": "CONFIG_NAME",
				"dynamicName": "CONFIG_NAME",
				"name": "plugin_name",
				"label": "Jedis Plugin",
				"id": "plugin_name",
				"title": "Jedis",
				"category": "General",
				"type": "select",
				"fieldType": "dynamicselect",
				"url": "/app/getPluginConfig/{{app_id}}/jedis-plugin/",
				"required": true
			}],
			"material_icon_color": "blue",
			"displayname": "Jedis Put",
			"material_icon_bg_color": "bg_blue",
			"name": "Jedis Put",
			"material_icon_img": "storage",
			"company": "Appup.com",
			"id": "jedis_put",
			"category": "Developers",
			"info": "Jedis Put."
		}, {
			"thumbnail": "json/nodes/images/sms/Condition.png",
			"author": "Appup Developer",
			"icon": "json/nodes/icons/sms/Condition.png",
			"language": "en",
			"branches": "success,failure",
			"type": {
				"name": "jolt-convert"
			},
			"material_icon": "compare_arrows",
			"workflow_tasklet_class_name": "com.appup.workflows.external.steps.JoltStepExecutor",
			"help": "Refine data from one json  to particular spec",
			"ui": [{
				"options": {
					"JSON as arrays": "LIST",
					"*JSON object": "MAP"
				},
				"name": "jsonType",
				"label": "Select JSON type",
				"id": "jsonType",
				"title": "Type",
				"category": "General",
				"type": "text",
				"fieldType": "select",
				"required": false
			}, {
				"name": "jsonStr",
				"label": "Json String",
				"id": "jsonStr",
				"title": "Enter json string",
				"category": "General",
				"type": "text",
				"fieldType": "input",
				"required": true
			}, {
				"name": "spec",
				"label": "Jolt Spec",
				"id": "spec",
				"title": "Enter Spec",
				"category": "General",
				"type": "text",
				"fieldType": "input",
				"required": true
			}, {
				"options": {
					"Free Marker Template": "ftl",
					"*Handlebar": "hb"
				},
				"name": "value_type",
				"label": "Select type",
				"id": "value_type",
				"title": "Type",
				"category": "General",
				"type": "text",
				"fieldType": "select",
				"required": false
			}, {
				"name": "output_variable",
				"label": "Output Variable",
				"id": "output_variable",
				"title": "Enter output variable",
				"category": "General",
				"type": "text",
				"fieldType": "input",
				"required": true
			}],
			"material_icon_color": "blue",
			"displayname": "Jolt Convert",
			"material_icon_bg_color": "bg_blue",
			"name": "Jolt Convert",
			"material_icon_img": "storage",
			"company": "Appup.com",
			"id": "utils-convert",
			"category": "Utilities",
			"info": "Convert Step"
		}, {
			"thumbnail": "json/nodes/images/sms/Condition.png",
			"author": "Appup Developer",
			"icon": "json/nodes/icons/sms/Condition.png",
			"language": "en",
			"branches": "success,failure",
			"type": {
				"name": "jq-json"
			},
			"material_icon": "compare_arrows",
			"workflow_tasklet_class_name": "com.appup.workflows.external.steps.JQStepExecutor",
			"help": "Jq step for JSON Processor",
			"ui": [{
				"name": "json",
				"label": "Json Input",
				"id": "json",
				"title": "Enter Json Input",
				"category": "General",
				"type": "text",
				"fieldType": "input",
				"required": true
			}, {
				"name": "expression",
				"label": "Enter Expression",
				"id": "expression",
				"title": "Enter Expression",
				"category": "General",
				"type": "text",
				"fieldType": "input",
				"required": true
			}, {
				"options": {
					"Free Marker Template": "ftl",
					"*Handlebar": "hb"
				},
				"name": "value_type",
				"label": "Select type",
				"id": "value_type",
				"title": "Type",
				"category": "General",
				"type": "text",
				"fieldType": "select",
				"required": false
			}, {
				"name": "output_variable",
				"label": "Output Variable",
				"id": "output_variable",
				"title": "Enter output variable",
				"category": "General",
				"type": "text",
				"fieldType": "input",
				"required": true
			}],
			"material_icon_color": "blue",
			"displayname": "Jq Json",
			"material_icon_bg_color": "bg_blue",
			"name": "Jq Json",
			"material_icon_img": "storage",
			"company": "Appup.com",
			"id": "jq-json",
			"category": "Utilities",
			"info": "Jq Json"
		}, {
			"thumbnail": "json/nodes/images/new/jwt-validtion-node.png",
			"author": "Appup Developer",
			"icon": "json/nodes/icons/new/jwt-validtion.png",
			"language": "en",
			"branches": "success,failure",
			"type": {
				"name": "jwt"
			},
			"material_icon": "storage",
			"workflow_tasklet_class_name": "com.appup.workflows.core.steps.jwt.JWTStepExecutor",
			"help": "JWT Step Execution",
			"ui": [{
				"name": "output_variable",
				"label": "Output Variable",
				"id": "output_variable",
				"title": "Output variable",
				"category": "General",
				"type": "text",
				"fieldType": "input",
				"required": false
			}, {
				"options": {
					"Free Marker Template": "ftl",
					"*Handlebar": "hb"
				},
				"name": "value_type",
				"label": "Select type",
				"id": "value_type",
				"title": "Type",
				"category": "General",
				"type": "text",
				"fieldType": "select",
				"required": false
			}, {
				"name": "claims",
				"label": "Claims",
				"id": "claims",
				"title": "",
				"category": "General",
				"type": "grid",
				"ui": [{
					"label": "Key",
					"name": "key",
					"required": "required",
					"title": "Please enter keyname",
					"fieldType": "input",
					"type": "text"
				}, {
					"label": "Value",
					"name": "value",
					"required": "required",
					"title": "Please enter value",
					"fieldType": "input",
					"type": "text"
				}],
				"fieldType": "grid",
				"required": true
			}, {
				"name": "subject",
				"label": "Subject",
				"id": "subject",
				"title": "Subject",
				"category": "General",
				"type": "text",
				"fieldType": "input",
				"required": true
			}, {
				"dynamicValue": "CONFIG_NAME",
				"dynamicName": "CONFIG_NAME",
				"name": "plugin_name",
				"label": "JWT Plugin",
				"id": "plugin_name",
				"title": "JWT Plugin",
				"category": "General",
				"type": "select",
				"fieldType": "dynamicselect",
				"url": "/app/getPluginConfig/{{app_id}}/jwt-plugin/",
				"required": true
			}],
			"material_icon_color": "blue",
			"displayname": "JWT Step",
			"material_icon_bg_color": "bg_blue",
			"name": "JWT Step",
			"material_icon_img": "storage",
			"company": "Appup.com",
			"id": "Jwt_Step",
			"category": "Auth",
			"info": "JWT Step"
		}, {
			"thumbnail": "json/nodes/images/new/jwt-validtion-node.png",
			"author": "Appup Developer",
			"icon": "json/nodes/icons/new/jwt-validtion.png",
			"language": "en",
			"branches": "success,failure",
			"type": {
				"name": "jwt-validate"
			},
			"material_icon": "storage",
			"workflow_tasklet_class_name": "com.appup.workflows.core.steps.jwt.JWTValidationStepExecutor",
			"help": "Json Web Token initializer",
			"ui": [{
				"ui": [{
					"name": "value",
					"label": "Expression",
					"id": "key",
					"title": "Enter the value",
					"category": "Settings",
					"type": "text",
					"fieldType": "input",
					"required": true
				}],
				"name": "sourceExpression",
				"label": "Source",
				"id": "source",
				"title": "source",
				"category": "Settings",
				"type": "grid",
				"fieldType": "grid",
				"required": true
			}, {
				"name": "name",
				"label": "Name",
				"id": "name",
				"title": "Enter the name",
				"category": "Settings",
				"type": "text",
				"fieldType": "input",
				"required": true
			}, {
				"name": "output_variable",
				"label": "Output Variable",
				"id": "output_variable",
				"title": "Output variable",
				"category": "Settings",
				"type": "text",
				"fieldType": "input",
				"required": false
			}, {
				"options": {
					"Free Marker Template": "ftl",
					"*Handlebar": "hb"
				},
				"name": "value_type",
				"label": "Select type",
				"id": "value_type",
				"title": "Type",
				"category": "Settings",
				"type": "text",
				"fieldType": "select",
				"required": false
			}, {
				"dynamicValue": "CONFIG_NAME",
				"dynamicName": "CONFIG_NAME",
				"name": "plugin_name",
				"label": "JWT Plugin",
				"id": "plugin_name",
				"title": "JWT Plugin",
				"category": "Settings",
				"type": "select",
				"fieldType": "dynamicselect",
				"url": "/app/getPluginConfig/{{app_id}}/jwt-plugin/",
				"required": true
			}],
			"material_icon_color": "blue",
			"displayname": "JWT Validation",
			"material_icon_bg_color": "bg_blue",
			"name": "JWT Validataion",
			"material_icon_img": "storage",
			"company": "Appup.com",
			"id": "JWT_Validation_Step",
			"category": "Auth",
			"info": "Json Web Token Validator"
		}, {
			"thumbnail": "json/nodes/images/common/jsonio.png",
			"icon": "json/nodes/icons/common/jsonio.png",
			"author": "Appup Team",
			"language": "en",
			"branches": "success,failure",
			"type": {
				"name": "kafka-consumer"
			},
			"material_icon": "storage",
			"workflow_tasklet_class_name": "com.appup.workflows.external.steps.kafka.KafkaConsumerStepExecutor",
			"help": "Kafka Consumer Step Execution",
			"ui": [{
				"dynamicValue": "CONFIG_NAME",
				"dynamicName": "CONFIG_NAME",
				"name": "plugin_name",
				"label": "Kafka Plugin",
				"id": "plugin_name",
				"title": "Kafka Plugin",
				"category": "General",
				"type": "select",
				"fieldType": "dynamicselect",
				"url": "/app/getPluginConfig/{{app_id}}/kafka-plugin/",
				"required": false
			}, {
				"name": "commit_after_read",
				"label": "Commit after read",
				"id": "commit_after_read",
				"title": "CommitAfterRead",
				"category": "General",
				"type": "text",
				"fieldType": "input",
				"required": false
			}, {
				"name": "consumer_timeout",
				"label": "Consumer Timeout",
				"id": "consumer_timeout",
				"title": "ConsumerTimeout",
				"category": "General",
				"type": "text",
				"fieldType": "input",
				"required": false
			}, {
				"name": "output_variable",
				"label": "Output",
				"id": "output_variable",
				"title": "Output",
				"category": "General",
				"type": "text",
				"fieldType": "input",
				"required": false
			}],
			"material_icon_color": "blue",
			"displayname": "Kafka Consumer Step",
			"material_icon_bg_color": "bg_blue",
			"name": "Kafka Consumer Step",
			"material_icon_img": "storage",
			"company": "Appup.com",
			"id": "Kafka consumer step",
			"category": "Utilities",
			"info": "Kafka Consumer Step"
		}, {
			"name": "Kafka Producer",
			"thumbnail": "json/nodes/images/common/jsonio.png",
			"icon": "json/nodes/icons/common/jsonio.png",
			"info": "Producer to send the data to Apache Kafka brokers.",
			"help": " A key/value pair to be sent to Kafka. This consists of a topic name to which the record is being sent, an optional partition number, and an optional key and value. <p> If a valid partition number is specified that partition will be used when sending the record. If no partition is specified but a key is present a partition will be chosen using a hash of the key. If neither key nor partition is present a partition will be assigned in a round-robin fashion. <p> The record also has an associated timestamp. If the user did not provide a timestamp, the producer will stamp the record with its current time. The timestamp eventually used by Kafka depends on the timestamp type configured for the topic. <li> If the topic is configured to use {@link org.apache.kafka.common.record.TimestampType#CREATE_TIME CreateTime}, the timestamp in the producer record will be used by the broker. </li> <li> If the topic is configured to use {@link org.apache.kafka.common.record.TimestampType#LOG_APPEND_TIME LogAppendTime}, the timestamp in the producer record will be overwritten by the broker with the broker local time when it appends the message to its log. </li> <p>",
			"author": "Appup Team",
			"language": "en",
			"type": {
				"name": "kafka-producers"
			},
			"branches": "done,inprogress,cancelled",
			"workflow_tasklet_class_name": "com.appup.workflows.external.steps.kafka.KafkaProducerStepExecutor",
			"ui": [{
				"dynamicValue": "CONFIG_NAME",
				"dynamicName": "CONFIG_NAME",
				"name": "plugin_name",
				"label": "Kafka Plugin",
				"id": "plugin_name",
				"title": "Kafka Producer plugin name",
				"category": "Settings",
				"type": "select",
				"fieldType": "dynamicselect",
				"url": "/app/getPluginConfig/{{app_id}}/kafka-plugin/",
				"required": true
			}, {
				"options": {
					"Free Marker Template": "ftl",
					"*Handlebar": "hb"
				},
				"name": "value_type",
				"label": "Select Template",
				"id": "value_type",
				"title": "Template type",
				"category": "Settings",
				"type": "select",
				"fieldType": "select",
				"required": false
			}, {
				"ui": [{
					"name": "key",
					"label": "Key",
					"id": "key",
					"title": "Enter the key",
					"category": "Messages",
					"type": "text",
					"fieldType": "input",
					"required": true
				}, {
					"name": "value",
					"label": "Message",
					"id": "value",
					"title": "Enter the Value",
					"category": "Messages",
					"type": "text",
					"fieldType": "input",
					"required": false
				}],
				"name": "messages",
				"label": "Messages",
				"id": "messages",
				"title": "",
				"category": "Messages",
				"type": "grid",
				"fieldType": "grid",
				"required": false
			}, {
				"label": "Output Variable",
				"category": "More Settings",
				"name": "output_variable",
				"id": "output_variable",
				"title": "Please enter a variable to store output",
				"fieldType": "input",
				"type": "text"
			}],
			"material_icon_color": "blue",
			"displayname": "Kafka-Producer",
			"material_icon_bg_color": "bg_blue",
			"material_icon_img": "storage",
			"company": "Appup.com",
			"id": "Kafka_Producer_Step",
			"category": "utilities"
		}, {
			"thumbnail": "json/nodes/images/common/jsonio.png",
			"icon": "json/nodes/icons/common/jsonio.png",
			"author": "Appup Team",
			"language": "en",
			"branches": "success,failure",
			"type": {
				"name": "kubernetes-deploy"
			},
			"material_icon": "storage",
			"workflow_tasklet_class_name": "com.appup.workflows.external.steps.KubernetesDeployStepExecutor",
			"help": "Deploying the application",
			"ui": [{
				"options": {
					"Free Marker Template": "ftl",
					"*Handlebar": "hb"
				},
				"name": "value_type",
				"label": "Template",
				"id": "value_type",
				"title": "Template",
				"category": "General",
				"type": "text",
				"fieldType": "select",
				"required": false
			}, {
				"dynamicValue": "CONFIG_NAME",
				"dynamicName": "CONFIG_NAME",
				"name": "plugin_name",
				"label": "Kubernetes plugin",
				"id": "plugin_name",
				"title": "Identity",
				"category": "General",
				"type": "select",
				"fieldType": "dynamicselect",
				"url": "/app/getPluginConfig/{{app_id}}/kubeapi-sequence-plugin/",
				"required": true
			}, {
				"name": "token",
				"label": "Token",
				"id": "token",
				"title": "Enter token",
				"category": "General",
				"type": "text",
				"fieldType": "input",
				"required": true
			}, {
				"name": "data",
				"label": "Json data",
				"id": "data",
				"title": "Json data.",
				"category": "General",
				"type": "text",
				"fieldType": "input",
				"required": true
			}, {
				"name": "action",
				"label": "Action",
				"id": "action",
				"title": "Enter action",
				"category": "Settings",
				"type": "text",
				"fieldType": "input",
				"required": true
			}, {
				"name": "cluster_url",
				"label": "Cluster url",
				"id": "cluster_url",
				"title": "Cluster url",
				"category": "Settings",
				"type": "text",
				"fieldType": "input",
				"required": true
			}, {
				"name": "log_url",
				"label": "Log url",
				"id": "log_url",
				"title": "Log url",
				"category": "Settings",
				"type": "text",
				"fieldType": "input",
				"required": true
			}, {
				"name": "log_request_method",
				"label": "Log request url",
				"id": "log_request_method",
				"title": "Log request url",
				"category": "Settings",
				"type": "text",
				"fieldType": "input",
				"required": true
			}],
			"material_icon_color": "blue",
			"displayname": "Deploy the application",
			"material_icon_bg_color": "bg_blue",
			"name": "Kubernetes Deploy",
			"material_icon_img": "storage",
			"company": "Appup.com",
			"id": "kubernetes-deploy",
			"category": "Amazon",
			"info": "Kubernetes Deploy"
		}, {
			"thumbnail": "json/nodes/images/common/jsonio.png",
			"author": "Appup Developer",
			"icon": "json/nodes/icons/common/jsonio.png",
			"language": "en",
			"branches": "success,failure",
			"type": {
				"name": "log-step"
			},
			"material_icon": "code",
			"workflow_tasklet_class_name": "com.appup.workflows.external.AppupLogStep",
			"help": "Execute the logging Level.",
			"ui": [{
				"options": {
					"All": "ALL",
					"Debug": "DEBUG",
					"Info": "INFO",
					"warn": "WARN",
					"Error": "ERROR"
				},
				"name": "level",
				"label": "Log Levels",
				"id": "level",
				"title": "Select the proper logging level",
				"category": "Settings",
				"type": "select",
				"fieldType": "select",
				"required": false
			}, {
				"name": "message",
				"label": "Message",
				"id": "message",
				"title": "Enter the message",
				"category": "Settings",
				"type": "text",
				"fieldType": "input",
				"required": false
			}],
			"material_icon_color": "blue",
			"displayname": "Logs",
			"material_icon_bg_color": "bg_blue",
			"name": "Logs",
			"material_icon_img": "storage",
			"company": "Appup.com",
			"id": "logstep",
			"category": "Developers",
			"info": "Execute the logging Level."
		}, {
			"thumbnail": "json/nodes/images/email/sendemail.png",
			"author": "Appup Developer",
			"icon": "json/nodes/icons/email/sendemail.png",
			"language": "en",
			"branches": "success,failure",
			"type": {
				"name": "mailgun-custom"
			},
			"material_icon": "email",
			"workflow_tasklet_class_name": "com.appup.workflows.core.steps.mailgun.MailgunCustomStepExecutor",
			"help": "Send Email With or With Out Attachment.",
			"ui": [{
				"options": {
					"Free Marker Template": "ftl",
					"*Handlebar": "hb"
				},
				"name": "value_type",
				"label": "Select type",
				"id": "value_type",
				"title": "Type",
				"category": "General",
				"type": "select",
				"fieldType": "select",
				"required": false
			}, {
				"name": "from_name",
				"label": "From name",
				"id": "from_name",
				"title": "Enter from name",
				"category": "Info",
				"type": "text",
				"fieldType": "input",
				"required": true
			}, {
				"name": "from_email",
				"label": "From (Email)",
				"id": "from_email",
				"title": "Enter from email address",
				"category": "Info",
				"type": "email",
				"fieldType": "input",
				"required": true
			}, {
				"name": "reply_to",
				"label": "Reply To",
				"id": "reply_to",
				"title": "Enter reply_to email address",
				"category": "Info",
				"type": "text",
				"fieldType": "input",
				"required": false
			}, {
				"name": "to",
				"label": "To",
				"id": "to_email",
				"title": "Enter to email address if its multiple seperate with semicolon",
				"category": "Info",
				"type": "text",
				"fieldType": "input",
				"required": true
			}, {
				"name": "cc",
				"label": "CC",
				"id": "cc_email",
				"title": "Enter Your CC E-mail ID if its multiple seperate with semicolon",
				"category": "Info",
				"type": "text",
				"fieldType": "input",
				"required": false
			}, {
				"name": "bcc",
				"label": "bCC",
				"id": "bcc_email",
				"title": "Enter Your BCC E-mail ID if its multiple seperate with semicolon",
				"category": "Info",
				"type": "text",
				"fieldType": "input",
				"required": false
			}, {
				"options": {
					"html": "html",
					"text": "text"
				},
				"name": "body_type",
				"label": "select body type",
				"id": "body_type",
				"title": "Select your email message type ( html/text )",
				"category": "Body",
				"type": "select",
				"fieldType": "select",
				"required": false
			}, {
				"name": "body",
				"label": "Email Content",
				"id": "body",
				"title": "Enter your email message",
				"category": "Body",
				"type": "textarea",
				"fieldType": "textarea",
				"cols": "50",
				"rows": "10",
				"required": false
			}, {
				"name": "subject",
				"label": "Subject",
				"id": "subject",
				"title": "Enter your subject for your email",
				"category": "Info",
				"type": "text",
				"fieldType": "input",
				"required": true
			}, {
				"name": "output_variable",
				"label": "Output Variable",
				"id": "output_variable",
				"title": "Enter output variale",
				"category": "General",
				"type": "text",
				"fieldType": "input",
				"required": false
			}, {
				"name": "apiKey",
				"label": "Api Key",
				"id": "apiKey",
				"title": "Enter your Api Key",
				"category": "General",
				"type": "text",
				"fieldType": "input",
				"required": true
			}, {
				"name": "host",
				"label": "Host",
				"id": "host",
				"title": "Host Name",
				"category": "General",
				"type": "text",
				"fieldType": "input",
				"required": true
			}, {
				"ui": [{
					"name": "key",
					"label": "FileName",
					"id": "key",
					"title": "Enter your file name",
					"category": "Parameters",
					"type": "text",
					"fieldType": "input",
					"required": false
				}, {
					"name": "value",
					"label": "Map Data Key",
					"id": "result",
					"title": "Enter your file path",
					"category": "Parameters",
					"type": "text",
					"fieldType": "input",
					"required": false
				}],
				"name": "attachments",
				"label": "Attachments",
				"id": "attachments",
				"title": "Attachments",
				"category": "Body",
				"type": "grid",
				"fieldType": "grid"
			}],
			"material_icon_color": "blue",
			"displayname": "Send mail Using MailGun",
			"material_icon_bg_color": "bg_blue",
			"name": "MailGun Custom Step",
			"material_icon_img": "storage",
			"company": "Appup.com",
			"id": "Send mail Using MailGun",
			"category": "Developers",
			"info": "Send Mail with or With Out Attachment(MailGun)."
		}, {
			"thumbnail": "json/nodes/images/email/sendemail.png",
			"author": "Appup Developer",
			"icon": "json/nodes/icons/email/sendemail.png",
			"language": "en",
			"branches": "success,failure",
			"type": {
				"name": "mailgun"
			},
			"material_icon": "email",
			"workflow_tasklet_class_name": "com.appup.workflows.core.steps.mailgun.MailgunStepExecutor",
			"help": "Send Email.",
			"ui": [{
				"name": "from_name",
				"label": "From name",
				"id": "from_name",
				"title": "Enter from name",
				"category": "Info",
				"type": "text",
				"fieldType": "input",
				"required": false
			}, {
				"name": "from_email",
				"label": "From (Email)",
				"id": "from_email",
				"title": "Enter from email address",
				"category": "Info",
				"type": "email",
				"fieldType": "input",
				"required": true
			}, {
				"name": "to",
				"label": "To (Email)",
				"id": "to_email",
				"title": "Enter to email address",
				"category": "Info",
				"type": "text",
				"fieldType": "input",
				"required": true
			}, {
				"name": "cc",
				"label": "Cc (Email)",
				"id": "cc_email",
				"title": "Enter cc email address",
				"category": "Info",
				"type": "text",
				"fieldType": "input",
				"required": false
			}, {
				"name": "bcc",
				"label": "Bcc (Email)",
				"id": "bcc_email",
				"title": "Enter bcc email address",
				"category": "Info",
				"type": "text",
				"fieldType": "input",
				"required": false
			}, {
				"name": "subject",
				"label": "Subject",
				"id": "subject",
				"title": "Enter your subject for your email",
				"category": "Info",
				"type": "text",
				"fieldType": "input",
				"required": false
			}, {
				"name": "output_variable",
				"label": "Output Variable",
				"id": "output_variable",
				"title": "Enter output variale",
				"category": "General",
				"type": "text",
				"fieldType": "input",
				"required": false
			}, {
				"name": "body",
				"label": "Email body message",
				"id": "body",
				"title": "Enter your email message",
				"category": "Info",
				"type": "textarea",
				"fieldType": "textarea",
				"cols": "50",
				"rows": "10",
				"required": false
			}, {
				"options": {
					"Html": "html",
					"Text": "text"
				},
				"name": "body_type",
				"label": "select body type",
				"id": "body_type",
				"title": "Select your email message type ( html/text )",
				"category": "Info",
				"type": "select",
				"fieldType": "select",
				"required": false
			}, {
				"options": {
					"Free Marker Template": "ftl",
					"*Handlebar": "hb"
				},
				"name": "value_type",
				"label": "Select type",
				"id": "value_type",
				"title": "Type",
				"category": "General",
				"type": "select",
				"fieldType": "select",
				"required": false
			}, {
				"dynamicValue": "CONFIG_NAME",
				"dynamicName": "CONFIG_NAME",
				"name": "plugin_name",
				"label": "Mailgun Plugin",
				"id": "plugin_name",
				"title": "Identity",
				"category": "General",
				"type": "select",
				"fieldType": "dynamicselect",
				"url": "/app/getPluginConfig/{{app_id}}/mailgun-plugin/",
				"required": true
			}],
			"material_icon_color": "blue",
			"displayname": "Send Email(Mailgun)",
			"material_icon_bg_color": "bg_blue",
			"name": "Send Email(Mailgun)",
			"material_icon_img": "storage",
			"company": "Appup.com",
			"id": "send-mailgun",
			"category": "Developers",
			"info": "Send Email."
		}, {
			"thumbnail": "json/nodes/images/email/sendemail.png",
			"author": "Appup Developer",
			"icon": "json/nodes/icons/email/sendemail.png",
			"language": "en",
			"branches": "success,failure",
			"type": {
				"name": "mailgun-email-with-attachment"
			},
			"material_icon": "email",
			"workflow_tasklet_class_name": "com.appup.workflows.core.steps.mailgun.MailgunwithAttachmentStepExecutor",
			"help": "Send Email With Attachment.",
			"ui": [{
				"name": "from_name",
				"label": "From name",
				"id": "from_name",
				"title": "Enter from name",
				"category": "General",
				"type": "text",
				"fieldType": "input",
				"required": true
			}, {
				"name": "from_email",
				"label": "From (Email)",
				"id": "from_email",
				"title": "Enter from email address",
				"category": "General",
				"type": "email",
				"fieldType": "input",
				"required": true
			}, {
				"name": "to",
				"label": "To",
				"id": "to_email",
				"title": "Enter to email address if its multiple seperate with semicolon",
				"category": "General",
				"type": "text",
				"fieldType": "input",
				"required": true
			}, {
				"name": "cc",
				"label": "CC",
				"id": "cc_email",
				"title": "Enter Your CC E-mail ID",
				"category": "General",
				"type": "text",
				"fieldType": "input",
				"required": false
			}, {
				"name": "bcc",
				"label": "bCC",
				"id": "bcc_email",
				"title": "Enter Your BCC E-mail ID",
				"category": "General",
				"type": "text",
				"fieldType": "input",
				"required": false
			}, {
				"name": "subject",
				"label": "Subject",
				"id": "subject",
				"title": "Enter your subject for your email",
				"category": "Info",
				"type": "text",
				"fieldType": "input",
				"required": true
			}, {
				"name": "output_variable",
				"label": "Output Variable",
				"id": "output_variable",
				"title": "Enter output variale",
				"category": "General",
				"type": "text",
				"fieldType": "input",
				"required": false
			}, {
				"name": "body",
				"label": "Email Content",
				"id": "body",
				"title": "Enter your email message",
				"category": "Info",
				"type": "textarea",
				"fieldType": "textarea",
				"cols": "50",
				"rows": "10",
				"required": false
			}, {
				"options": {
					"html": "html",
					"text": "text"
				},
				"name": "body_type",
				"label": "select body type",
				"id": "body_type",
				"title": "Select your email message type ( html/text )",
				"category": "Info",
				"type": "select",
				"fieldType": "select",
				"required": false
			}, {
				"options": {
					"Free Marker Template": "ftl",
					"*Handlebar": "hb"
				},
				"name": "value_type",
				"label": "Select type",
				"id": "value_type",
				"title": "Type",
				"category": "General",
				"type": "select",
				"fieldType": "select",
				"required": false
			}, {
				"dynamicValue": "CONFIG_NAME",
				"dynamicName": "CONFIG_NAME",
				"name": "plugin_name",
				"label": "Mailgun Plugin",
				"id": "plugin_name",
				"title": "Identity",
				"category": "General",
				"type": "select",
				"fieldType": "dynamicselect",
				"url": "/app/getPluginConfig/{{app_id}}/mailgun-plugin/",
				"required": false
			}, {
				"ui": [{
					"name": "key",
					"label": "FileName",
					"id": "key",
					"title": "Enter your file name",
					"category": "Parameters",
					"type": "text",
					"fieldType": "input",
					"required": false
				}, {
					"name": "value",
					"label": "Map Data Key",
					"id": "result",
					"title": "Enter your file path",
					"category": "Parameters",
					"type": "text",
					"fieldType": "input",
					"required": false
				}],
				"name": "attachments",
				"label": "Attachments",
				"id": "attachments",
				"title": "",
				"category": "General",
				"type": "grid",
				"fieldType": "grid"
			}],
			"material_icon_color": "blue",
			"displayname": "Send Mail with Attachment(MailGun)",
			"material_icon_bg_color": "bg_blue",
			"name": "Send Mail with Attachment(MailGun)",
			"material_icon_img": "storage",
			"company": "Appup.com",
			"id": "send-mailgun-with-attachment",
			"category": "Developers",
			"info": "Send Mail with Attachment(MailGun)."
		}, {
			"thumbnail": "json/nodes/images/common/jsonio.png",
			"author": "Appup Developer",
			"icon": "json/nodes/icons/common/jsonio.png",
			"language": "en",
			"branches": "success,failure",
			"type": {
				"name": "oauth-newtoken"
			},
			"material_icon": "accessible",
			"workflow_tasklet_class_name": "com.appup.workflows.external.steps.identities.OauthNewTokenStepExecutor",
			"help": "Integrate your oauth here.",
			"ui": [{
				"options": {
					"Free Marker Template": "ftl",
					"*Handlebar": "hb"
				},
				"name": "value_type",
				"label": "Select type",
				"id": "value_type",
				"title": "Type",
				"category": "Info",
				"type": "text",
				"fieldType": "select",
				"required": false
			}, {
				"name": "plugin_name",
				"label": "Plugin",
				"id": "plugin_name",
				"title": "Enter Plugin Name",
				"category": "Info",
				"type": "text",
				"fieldType": "input",
				"required": true
			}, {
				"name": "output_variable",
				"label": "Output Variable",
				"id": "output-variable",
				"title": "Enter variable name to hold output",
				"category": "Info",
				"type": "text",
				"fieldType": "input",
				"required": false
			}, {
				"label": "Refresh Token",
				"required": "required",
				"category": "Info",
				"name": "refresh_token",
				"id": "refresh-token",
				"cols": "75",
				"rows": "5",
				"title": "Enter refresh token of oauth.",
				"fieldType": "textarea",
				"type": "textarea"
			}],
			"material_icon_color": "blue",
			"displayname": "OAuthNewToken Custom",
			"material_icon_bg_color": "bg_blue",
			"name": "OAuthNewToken Custom",
			"material_icon_img": "storage",
			"company": "Appup",
			"id": "oauth_newtoken_step",
			"category": "Auth",
			"info": "Integrate your oauth here."
		}, {
			"thumbnail": "json/nodes/images/common/jsonio.png",
			"author": "Appup Developer",
			"icon": "json/nodes/icons/common/jsonio.png",
			"language": "en",
			"branches": "success,failure",
			"type": {
				"name": "oauth"
			},
			"material_icon": "accessible",
			"workflow_tasklet_class_name": "com.appup.workflows.external.steps.identities.OauthStepExecutor",
			"help": "Integrate your oauth here.",
			"ui": [{
				"options": {
					"Free Marker Template": "ftl",
					"*Handlebar": "hb"
				},
				"name": "value_type",
				"label": "Select type",
				"id": "value_type",
				"title": "Type",
				"category": "Info",
				"type": "text",
				"fieldType": "select",
				"required": false
			}, {
				"name": "plugin_name",
				"label": "Plugin",
				"id": "plugin_name",
				"title": "Enter Plugin Name",
				"category": "Info",
				"type": "text",
				"fieldType": "input",
				"required": true
			}, {
				"name": "redirect_url",
				"label": "Redirect URL",
				"id": "redirect_url",
				"title": "Enter url which should be the callback entry point of the app",
				"category": "Info",
				"type": "text",
				"fieldType": "input",
				"required": false
			}, {
				"ui": [{
					"name": "key",
					"label": "Key",
					"id": "key",
					"title": "Enter the key",
					"category": "Params",
					"type": "text",
					"fieldType": "input",
					"required": false
				}, {
					"name": "value",
					"label": "Value",
					"id": "result",
					"title": "Enter the value",
					"category": "Params",
					"type": "text",
					"fieldType": "input",
					"required": false
				}],
				"name": "params",
				"label": "Parameters",
				"id": "parameters",
				"title": "",
				"category": "Info",
				"type": "grid",
				"fieldType": "grid"
			}],
			"material_icon_color": "blue",
			"displayname": "OAuth Custom",
			"material_icon_bg_color": "bg_blue",
			"name": "OAuth Custom",
			"material_icon_img": "storage",
			"company": "Appup",
			"id": "oauth_step",
			"category": "Auth",
			"info": "Integrate your oauth here."
		}, {
			"thumbnail": "json/nodes/images/common/jsonio.png",
			"author": "Appup Developer",
			"icon": "json/nodes/icons/common/jsonio.png",
			"language": "en",
			"branches": "success,failure",
			"type": {
				"name": "oauth-token"
			},
			"material_icon": "accessible",
			"workflow_tasklet_class_name": "com.appup.workflows.external.steps.identities.OauthTokenStepExecutor",
			"help": "Integrate your oauth here.",
			"ui": [{
				"options": {
					"Free Marker Template": "ftl",
					"*Handlebar": "hb"
				},
				"name": "value_type",
				"label": "Select type",
				"id": "value_type",
				"title": "Type",
				"category": "Info",
				"type": "text",
				"fieldType": "select",
				"required": false
			}, {
				"name": "plugin_name",
				"label": "Plugin",
				"id": "plugin_name",
				"title": "Enter Plugin Name",
				"category": "Info",
				"type": "text",
				"fieldType": "input",
				"required": true
			}, {
				"name": "output_variable",
				"label": "Output Variable",
				"id": "output-variable",
				"title": "Enter variable name to hold output",
				"category": "Info",
				"type": "text",
				"fieldType": "input",
				"required": false
			}, {
				"ui": [{
					"name": "key",
					"label": "Key",
					"id": "key",
					"title": "Enter the key",
					"category": "Params",
					"type": "text",
					"fieldType": "input",
					"required": false
				}, {
					"name": "value",
					"label": "Value",
					"id": "result",
					"title": "Enter the value",
					"category": "Params",
					"type": "text",
					"fieldType": "input",
					"required": false
				}],
				"name": "params",
				"label": "Parameters",
				"id": "parameters",
				"title": "",
				"category": "Info",
				"type": "grid",
				"fieldType": "grid"
			}],
			"material_icon_color": "blue",
			"displayname": "OAuthToken Custom",
			"material_icon_bg_color": "bg_blue",
			"name": "OAuthToken Custom",
			"material_icon_img": "storage",
			"company": "Appup",
			"id": "oauth_token_step",
			"category": "Auth",
			"info": "Integrate your oauth here."
		}, {
			"thumbnail": "json/nodes/images/common/jsonio.png",
			"author": "Appup Developer",
			"icon": "json/nodes/icons/common/jsonio.png",
			"language": "en",
			"branches": "success,failure",
			"type": {
				"name": "oauth-newtoken"
			},
			"material_icon": "accessible",
			"workflow_tasklet_class_name": "com.appup.workflows.external.steps.identities.OauthNewTokenStepExecutor",
			"help": "Integrate your oauth here.",
			"ui": [{
				"options": {
					"Free Marker Template": "ftl",
					"*Handlebar": "hb"
				},
				"name": "value_type",
				"label": "Select type",
				"id": "value_type",
				"title": "Type",
				"category": "Info",
				"type": "text",
				"fieldType": "select",
				"required": false
			}, {
				"dynamicValue": "CONFIG_NAME",
				"dynamicName": "CONFIG_NAME",
				"name": "plugin_name",
				"label": "Plugin",
				"id": "plugin_name",
				"title": "Select oauth plugin",
				"category": "Info",
				"type": "select",
				"fieldType": "dynamicselect",
				"url": "/app/get-by-category/{{app_id}}/OAuth/",
				"required": true
			}, {
				"name": "output_variable",
				"label": "Output Variable",
				"id": "output-variable",
				"title": "Enter variable name to hold output",
				"category": "Info",
				"type": "text",
				"fieldType": "input",
				"required": false
			}, {
				"label": "Refresh Token",
				"required": "required",
				"category": "Info",
				"name": "refresh_token",
				"id": "refresh-token",
				"cols": "75",
				"rows": "5",
				"title": "Enter refresh token of oauth.",
				"fieldType": "textarea",
				"type": "textarea"
			}],
			"material_icon_color": "blue",
			"displayname": "OAuthNewToken",
			"material_icon_bg_color": "bg_blue",
			"name": "OAuthNewToken",
			"material_icon_img": "storage",
			"company": "Appup",
			"id": "oauth_newtoken_step",
			"category": "Auth",
			"info": "Integrate your oauth here."
		}, {
			"thumbnail": "json/nodes/images/common/jsonio.png",
			"author": "Appup Developer",
			"icon": "json/nodes/icons/common/jsonio.png",
			"language": "en",
			"branches": "success,failure",
			"type": {
				"name": "oauth"
			},
			"material_icon": "accessible",
			"workflow_tasklet_class_name": "com.appup.workflows.external.steps.identities.OauthStepExecutor",
			"help": "Integrate your oauth here.",
			"ui": [{
				"options": {
					"Free Marker Template": "ftl",
					"*Handlebar": "hb"
				},
				"name": "value_type",
				"label": "Select type",
				"id": "value_type",
				"title": "Type",
				"category": "Info",
				"type": "text",
				"fieldType": "select",
				"required": false
			}, {
				"dynamicValue": "CONFIG_NAME",
				"dynamicName": "CONFIG_NAME",
				"name": "plugin_name",
				"label": "Plugin",
				"id": "plugin_name",
				"title": "Select oauth plugin",
				"category": "Info",
				"type": "select",
				"fieldType": "dynamicselect",
				"url": "/app/get-by-category/{{app_id}}/OAuth/",
				"required": true
			}, {
				"name": "redirect_url",
				"label": "Redirect URL",
				"id": "redirect_url",
				"title": "Enter url which should be the callback entry point of the app",
				"category": "Info",
				"type": "text",
				"fieldType": "input",
				"required": false
			}, {
				"ui": [{
					"name": "key",
					"label": "Key",
					"id": "key",
					"title": "Enter the key",
					"category": "Params",
					"type": "text",
					"fieldType": "input",
					"required": false
				}, {
					"name": "value",
					"label": "Value",
					"id": "result",
					"title": "Enter the value",
					"category": "Params",
					"type": "text",
					"fieldType": "input",
					"required": false
				}],
				"name": "params",
				"label": "Parameters",
				"id": "parameters",
				"title": "",
				"category": "Info",
				"type": "grid",
				"fieldType": "grid"
			}],
			"material_icon_color": "blue",
			"displayname": "OAuth",
			"material_icon_bg_color": "bg_blue",
			"name": "OAuth",
			"material_icon_img": "storage",
			"company": "Appup",
			"id": "oauth_step",
			"category": "Auth",
			"info": "Integrate your oauth here."
		}, {
			"thumbnail": "json/nodes/images/common/jsonio.png",
			"author": "Appup Developer",
			"icon": "json/nodes/icons/common/jsonio.png",
			"language": "en",
			"branches": "success,failure",
			"type": {
				"name": "oauth-token"
			},
			"material_icon": "accessible",
			"workflow_tasklet_class_name": "com.appup.workflows.external.steps.identities.OauthTokenStepExecutor",
			"help": "Integrate your oauth here.",
			"ui": [{
				"options": {
					"Free Marker Template": "ftl",
					"*Handlebar": "hb"
				},
				"name": "value_type",
				"label": "Select type",
				"id": "value_type",
				"title": "Type",
				"category": "Info",
				"type": "text",
				"fieldType": "select",
				"required": false
			}, {
				"dynamicValue": "CONFIG_NAME",
				"dynamicName": "CONFIG_NAME",
				"name": "plugin_name",
				"label": "Plugin",
				"id": "plugin_name",
				"title": "Select oauth plugin",
				"category": "Info",
				"type": "select",
				"fieldType": "dynamicselect",
				"url": "/app/get-by-category/{{app_id}}/OAuth/",
				"required": true
			}, {
				"name": "output_variable",
				"label": "Output Variable",
				"id": "output-variable",
				"title": "Enter variable name to hold output",
				"category": "Info",
				"type": "text",
				"fieldType": "input",
				"required": false
			}, {
				"ui": [{
					"name": "key",
					"label": "Key",
					"id": "key",
					"title": "Enter the key",
					"category": "Params",
					"type": "text",
					"fieldType": "input",
					"required": false
				}, {
					"name": "value",
					"label": "Value",
					"id": "result",
					"title": "Enter the value",
					"category": "Params",
					"type": "text",
					"fieldType": "input",
					"required": false
				}],
				"name": "params",
				"label": "Parameters",
				"id": "parameters",
				"title": "",
				"category": "Info",
				"type": "grid",
				"fieldType": "grid"
			}],
			"material_icon_color": "blue",
			"displayname": "OAuthToken",
			"material_icon_bg_color": "bg_blue",
			"name": "OAuthToken",
			"material_icon_img": "storage",
			"company": "Appup",
			"id": "oauth_token_step",
			"category": "Auth",
			"info": "Integrate your oauth here."
		}, {
			"thumbnail": "json/nodes/images/Start.png",
			"author": "Appup Developer",
			"icon": "json/nodes/icons/DBUpdate.png",
			"language": "en",
			"branches": "success,failure",
			"type": {
				"name": "microsoft-onedrive-binary-file-download"
			},
			"material_icon": "cloud_download",
			"workflow_tasklet_class_name": "com.appup.workflows.external.steps.identities.OneDriveFileDownloadStepExecutor",
			"help": "Onedrive File Download Step",
			"ui": [{
				"name": "file_path",
				"label": "File Path",
				"id": "file_path",
				"title": "Enter the File Path",
				"category": "General",
				"type": "text",
				"fieldType": "input",
				"required": true
			}, {
				"name": "output_variable",
				"label": "Output Variable",
				"id": "output_variable",
				"title": "Output Variable",
				"category": "General",
				"type": "text",
				"fieldType": "input",
				"required": false
			}, {
				"options": {
					"Free Marker Template": "ftl",
					"*Handlebar": "hb"
				},
				"name": "value_type",
				"label": "Type",
				"id": "value_type",
				"title": "Enter the Type",
				"category": "General",
				"type": "select",
				"fieldType": "select",
				"required": false
			}, {
				"name": "access_token",
				"label": "Access Token",
				"id": "access_token",
				"title": "Enter the Access Token",
				"category": "General",
				"type": "text",
				"fieldType": "input",
				"required": true
			}],
			"material_icon_color": "blue",
			"displayname": "Onedrive File Download",
			"material_icon_bg_color": "bg_blue",
			"name": "Onedrive File Download",
			"material_icon_img": "storage",
			"company": "Appup.com",
			"id": "microsoft-onedrive-binary-file-download-step",
			"category": "Utilities",
			"info": "File Download Step"
		}, {
			"thumbnail": "json/nodes/images/Start.png",
			"author": "Appup Developer",
			"icon": "json/nodes/icons/DBUpdate.png",
			"language": "en",
			"branches": "success,failure",
			"type": {
				"name": "microsoft-onedrive-binary-file-upload"
			},
			"material_icon": "cloud_download",
			"workflow_tasklet_class_name": "com.appup.workflows.external.steps.identities.OneDriveFileUploadStepExecutor",
			"help": "Onedrive File Upload Step",
			"ui": [{
				"name": "file_path",
				"label": "File Path",
				"id": "file_path",
				"title": "Enter the File Path",
				"category": "General",
				"type": "text",
				"fieldType": "input",
				"required": true
			}, {
				"name": "file_data",
				"label": "File Data",
				"id": "file_data",
				"title": "Enter the File Data",
				"category": "General",
				"type": "text",
				"fieldType": "input",
				"required": true
			}, {
				"name": "output_variable",
				"label": "Output Variable",
				"id": "output_variable",
				"title": "Output Variable",
				"category": "General",
				"type": "text",
				"fieldType": "input",
				"required": true
			}, {
				"options": {
					"Free Marker Template": "ftl",
					"*Handlebar": "hb"
				},
				"name": "value_type",
				"label": "Value Type",
				"id": "value_type",
				"title": "Enter the Type",
				"category": "General",
				"type": "select",
				"fieldType": "select",
				"required": false
			}, {
				"name": "access_token",
				"label": "Access Token",
				"id": "access_token",
				"title": "Enter the Access Token",
				"category": "General",
				"type": "text",
				"fieldType": "input",
				"required": true
			}, {
				"name": "file_access",
				"label": "File Access",
				"id": "file_access",
				"title": "Enter the Access type of File",
				"category": "General",
				"type": "text",
				"fieldType": "input",
				"required": false
			}],
			"material_icon_color": "blue",
			"displayname": "Onedrive File Upload",
			"material_icon_bg_color": "bg_blue",
			"name": "Onedrive File Upload",
			"material_icon_img": "storage",
			"company": "Appup.com",
			"id": "microsoft-onedrive-binary-file-upload-step",
			"category": "Utilities",
			"info": "File Upload Step"
		}, {
			"thumbnail": "json/nodes/images/Geographic.png",
			"author": "Appup Developer",
			"icon": "json/nodes/icons/Verify.png",
			"language": "en",
			"branches": "success,failure",
			"type": {
				"name": "publish-google-event"
			},
			"material_icon": "event",
			"workflow_tasklet_class_name": "com.appup.workflows.core.steps.event.GooglePublishEventStepExecutor",
			"help": "Publish to Google Step",
			"ui": [{
				"name": "topicName",
				"label": "Topic name",
				"id": "topic",
				"title": "Topic name",
				"category": "Publish",
				"type": "text",
				"fieldType": "input",
				"required": true
			}, {
				"name": "serviceAccountFileLocation",
				"label": "JSON file location",
				"id": "serviceAccountFileLocation",
				"title": "Service account JSON file location",
				"category": "Publish",
				"type": "text",
				"fieldType": "input",
				"required": true
			}, {
				"name": "data",
				"label": "Payload to publish",
				"id": "data",
				"title": "Payload data",
				"category": "Publish",
				"type": "text",
				"fieldType": "input",
				"required": true
			}],
			"material_icon_color": "blue",
			"displayname": "Google PubSup ",
			"material_icon_bg_color": "bg_blue",
			"name": "Google PubSup ",
			"material_icon_img": "storage",
			"company": "Appup.com",
			"id": "publish_google_event",
			"category": "Google",
			"info": "Publish's a message to Google pub/sub"
		}, {
			"thumbnail": "json/nodes/images/DBRestAPI.png",
			"author": "Appup Developer",
			"icon": "json/nodes/icons/DBRestAPI.png",
			"language": "en",
			"branches": "success,failure",
			"type": {
				"name": "pubnub-dynamic-step"
			},
			"material_icon": "cloud_upload",
			"workflow_tasklet_class_name": "com.appup.workflows.core.steps.pubnub.PubnubDynamicStepExecutor",
			"help": "Pubnub Push Notification Step",
			"ui": [{
				"name": "channel",
				"label": "Channel",
				"id": "channel",
				"title": "Enter Channel Name",
				"category": "General",
				"type": "text",
				"fieldType": "input",
				"required": true
			}, {
				"name": "message",
				"label": "Notification Message",
				"id": "message",
				"title": "Enter the Notification Message",
				"category": "General",
				"type": "text",
				"fieldType": "input",
				"required": false
			}, {
				"name": "auth_key",
				"label": "Auth Key",
				"id": "auth_key",
				"title": "Auth Key",
				"category": "General",
				"type": "text",
				"fieldType": "input",
				"required": false
			}, {
				"options": {
					"Free Marker Template": "ftl",
					"*Handlebar": "hb"
				},
				"name": "value_type",
				"label": "Type",
				"id": "value_type",
				"title": "Enter the Type",
				"category": "General",
				"type": "select",
				"fieldType": "select",
				"required": false
			}, {
				"name": "publish_key",
				"label": "Publish Key",
				"id": "publish_key",
				"title": "Publish Key",
				"category": "Plugins",
				"type": "text",
				"fieldType": "input",
				"required": true
			}, {
				"name": "output_variable",
				"label": "Output Variable",
				"id": "output_variable",
				"title": "Output Variable",
				"category": "General",
				"type": "text",
				"fieldType": "input",
				"required": false
			}, {
				"name": "subscribe_key",
				"label": "Subscribe Key",
				"id": "subscribe_key",
				"title": "Subscribe Key",
				"category": "Plugins",
				"type": "text",
				"fieldType": "input",
				"required": true
			}, {
				"name": "secret_key",
				"label": "Secret Key",
				"id": "secret_key",
				"title": "Secret Key",
				"category": "Plugins",
				"type": "text",
				"fieldType": "input",
				"required": true
			}],
			"material_icon_color": "blue",
			"displayname": "Pubnub Dynamic Push Notification",
			"material_icon_bg_color": "bg_blue",
			"name": "Pubnub Dynamic Push Notification",
			"material_icon_img": "storage",
			"company": "Appup.com",
			"id": "pubnub_dynamic_push_notification_step",
			"category": "Utilities",
			"info": "Pubnub Dynamic Push Notification step"
		}, {
			"thumbnail": "json/nodes/images/DBRestAPI.png",
			"author": "Appup Developer",
			"icon": "json/nodes/icons/DBRestAPI.png",
			"language": "en",
			"branches": "success,failure",
			"type": {
				"name": "pubnub-step"
			},
			"material_icon": "cloud_upload",
			"workflow_tasklet_class_name": "com.appup.workflows.core.steps.pubnub.PubnubStepExecutor",
			"help": "Pubnub Push Notification Step",
			"ui": [{
				"name": "channel",
				"label": "Channel",
				"id": "channel",
				"title": "Enter Channel Name",
				"category": "General",
				"type": "text",
				"fieldType": "input",
				"required": true
			}, {
				"name": "message",
				"label": "Notification Message",
				"id": "message",
				"title": "Enter the Notification Message",
				"category": "General",
				"type": "text",
				"fieldType": "input",
				"required": false
			}, {
				"name": "auth_key",
				"label": "Auth Key",
				"id": "auth_key",
				"title": "Auth Key",
				"category": "General",
				"type": "text",
				"fieldType": "input",
				"required": false
			}, {
				"name": "output_variable",
				"label": "Output Variable",
				"id": "output_variable",
				"title": "Output Variable",
				"category": "General",
				"type": "text",
				"fieldType": "input",
				"required": false
			}, {
				"options": {
					"Free Marker Template": "ftl",
					"*Handlebar": "hb"
				},
				"name": "value_type",
				"label": "Type",
				"id": "value_type",
				"title": "Enter the Type",
				"category": "General",
				"type": "select",
				"fieldType": "select",
				"required": false
			}, {
				"dynamicValue": "CONFIG_NAME",
				"dynamicName": "CONFIG_NAME",
				"name": "plugin_name",
				"label": "Pubnub Plugin",
				"id": "plugin_name",
				"title": "Identity",
				"category": "General",
				"type": "select",
				"fieldType": "dynamicselect",
				"url": "/app/getPluginConfig/{{app_id}}/pubnub-plugin/",
				"required": true
			}],
			"material_icon_color": "blue",
			"displayname": "Pubnub Push Notification",
			"material_icon_bg_color": "bg_blue",
			"name": "Pubnub Push Notification",
			"material_icon_img": "storage",
			"company": "Appup.com",
			"id": "pubnub_push_notification_step",
			"category": "Utilities",
			"info": "Pubnub Push Notification step"
		}, {
			"thumbnail": "json/nodes/images/DBRestAPI.png",
			"author": "Appup Developer",
			"icon": "json/nodes/icons/DBRestAPI.png",
			"language": "en",
			"branches": "success,failure",
			"type": {
				"name": "web-push"
			},
			"material_icon": "cloud_upload",
			"workflow_tasklet_class_name": "com.appup.workflows.external.steps.PushNotificationStepExecutor",
			"help": "Web push Notification",
			"ui": [{
				"dynamicValue": "CONFIG_NAME",
				"dynamicName": "CONFIG_NAME",
				"name": "plugin_name",
				"label": "Plugin",
				"id": "plugin_name",
				"title": "Select Vapid Key Generator Plugin",
				"category": "General",
				"type": "select",
				"fieldType": "dynamicselect",
				"url": "/app/getPluginConfig/{{app_id}}/push-plugin/",
				"required": true
			}, {
				"name": "p256dh",
				"label": "User public key(p256dh)",
				"id": "p256dh",
				"title": "User public key(p256dh)",
				"category": "Settings",
				"type": "text",
				"fieldType": "input",
				"required": true
			}, {
				"name": "auth",
				"label": "Auth key",
				"id": "auth",
				"title": "Auth Key",
				"category": "Settings",
				"type": "text",
				"fieldType": "input",
				"required": true
			}, {
				"name": "end_point",
				"label": "End point",
				"id": "end_point",
				"title": "Enter the endpoint url",
				"category": "Settings",
				"type": "text",
				"fieldType": "input",
				"required": true
			}, {
				"name": "title",
				"label": "Title",
				"id": "title",
				"title": "Enter Title",
				"category": "General",
				"type": "text",
				"fieldType": "input",
				"required": true
			}, {
				"name": "message",
				"label": "Message",
				"id": "message",
				"title": "Enter The Message",
				"category": "General",
				"type": "text",
				"fieldType": "input",
				"required": true
			}, {
				"name": "click_target",
				"label": "Click event target",
				"id": "click_target",
				"title": "Enter Event Target",
				"category": "General",
				"type": "text",
				"fieldType": "input",
				"required": true
			}, {
				"options": {
					"Free Marker Template": "ftl",
					"*Handlebar": "hb"
				},
				"name": "value_type",
				"label": "Type",
				"id": "value_type",
				"title": "Enter the Type",
				"category": "General",
				"type": "select",
				"fieldType": "select",
				"required": false
			}, {
				"options": {
					"True": "true",
					"*False": "false"
				},
				"name": "async_send",
				"label": "Async send",
				"id": "async_send",
				"title": "Async send",
				"category": "General",
				"type": "select",
				"fieldType": "select",
				"required": false
			}, {
				"name": "output_variable",
				"label": "Output Variable",
				"id": "output_variable",
				"title": "Output Variable",
				"category": "General",
				"type": "text",
				"fieldType": "input",
				"required": true
			}],
			"material_icon_color": "blue",
			"displayname": "Web Push Notification",
			"material_icon_bg_color": "bg_blue",
			"name": "Web Push Notification",
			"material_icon_img": "storage",
			"company": "Appup.com",
			"id": "push-notification",
			"category": "Google",
			"info": "Push Notification"
		}, {
			"thumbnail": "json/nodes/images/common/jsonio.png",
			"author": "Appup Developer",
			"icon": "json/nodes/icons/common/jsonio.png",
			"language": "en",
			"branches": "success,failure",
			"type": {
				"name": "pusher-auth"
			},
			"material_icon": "email",
			"workflow_tasklet_class_name": "com.appup.workflows.core.steps.pusherauth.PusherAuthStepExecutor",
			"help": "PusherAuth notification message.",
			"ui": [{
				"options": {
					"Free Marker Template": "ftl",
					"*Handlebar": "hb"
				},
				"name": "value_type",
				"label": "Template",
				"id": "value_type",
				"title": "Template",
				"category": "General",
				"type": "text",
				"fieldType": "select",
				"required": false
			}, {
				"name": "event_name",
				"label": "Enter event name",
				"id": "event_name",
				"title": "Enter event name.",
				"category": "General",
				"type": "text",
				"fieldType": "input",
				"required": true
			}, {
				"name": "channel_name",
				"label": "Enter the channel name.",
				"id": "channel_name",
				"title": "Enter the channel name",
				"category": "General",
				"type": "text",
				"fieldType": "input",
				"required": false
			}, {
				"name": "socket_id",
				"label": "Enter the socket id.",
				"id": "socket_id",
				"title": "Enter the socket id",
				"category": "General",
				"type": "text",
				"fieldType": "input",
				"required": false
			}, {
				"name": "message",
				"label": "Enter the notification message.",
				"id": "message",
				"title": "Enter the notification message",
				"category": "General",
				"type": "text",
				"fieldType": "input",
				"required": false
			}, {
				"name": "output_variable",
				"label": "Enter the output variable.",
				"id": "output_variable",
				"title": "Enter the output variable",
				"category": "General",
				"type": "text",
				"fieldType": "input",
				"required": false
			}, {
				"dynamicValue": "CONFIG_NAME",
				"dynamicName": "CONFIG_NAME",
				"name": "plugin_name",
				"label": "Enter pusher notification plugin name",
				"id": "plugin_name",
				"title": "Pusher",
				"category": "General",
				"type": "select",
				"fieldType": "dynamicselect",
				"url": "/app/getPluginConfig/{{app_id}}/pusher-plugin/",
				"required": true
			}],
			"material_icon_color": "blue",
			"displayname": "Pusher Auth Notification",
			"material_icon_bg_color": "bg_blue",
			"name": "Pusher Auth Notification",
			"material_icon_img": "storage",
			"company": "Appup.com",
			"id": "pusher-plugin",
			"category": "Utilities",
			"info": "Pusher Auth Notification."
		}, {
			"thumbnail": "json/nodes/images/common/jsonio.png",
			"author": "Appup Developer",
			"icon": "json/nodes/icons/common/jsonio.png",
			"language": "en",
			"branches": "success,failure",
			"type": {
				"name": "pusher-dynamic-auth"
			},
			"material_icon": "email",
			"workflow_tasklet_class_name": "com.appup.workflows.core.steps.pusherauth.PusherDynamicAuthStepExecutor",
			"help": "PusherAuth notification message.",
			"ui": [{
				"options": {
					"Free Marker Template": "ftl",
					"*Handlebar": "hb"
				},
				"name": "value_type",
				"label": "Template",
				"id": "value_type",
				"title": "Template",
				"category": "General",
				"type": "text",
				"fieldType": "select",
				"required": false
			}, {
				"name": "event_name",
				"label": "Enter event name",
				"id": "event_name",
				"title": "Enter event name.",
				"category": "General",
				"type": "text",
				"fieldType": "input",
				"required": true
			}, {
				"name": "channel_name",
				"label": "Enter the channel name.",
				"id": "channel_name",
				"title": "Enter the channel name",
				"category": "General",
				"type": "text",
				"fieldType": "input",
				"required": false
			}, {
				"name": "socket_id",
				"label": "Enter the socket id.",
				"id": "socket_id",
				"title": "Enter the socket id",
				"category": "General",
				"type": "text",
				"fieldType": "input",
				"required": false
			}, {
				"name": "message",
				"label": "Enter the notification message.",
				"id": "message",
				"title": "Enter the notification message",
				"category": "General",
				"type": "text",
				"fieldType": "input",
				"required": false
			}, {
				"name": "output_variable",
				"label": "Enter the output variable.",
				"id": "output_variable",
				"title": "Enter the output variable",
				"category": "General",
				"type": "text",
				"fieldType": "input",
				"required": false
			}, {
				"name": "appId",
				"label": "Enter the appId.",
				"id": "appId",
				"title": "Enter the appId",
				"category": "Plugins",
				"type": "text",
				"fieldType": "input",
				"required": true
			}, {
				"name": "key",
				"label": "Enter the key.",
				"id": "key",
				"title": "Enter the key",
				"category": "Plugins",
				"type": "text",
				"fieldType": "input",
				"required": true
			}, {
				"name": "secret",
				"label": "Enter the secret.",
				"id": "secret",
				"title": "Enter the secret",
				"category": "Plugins",
				"type": "text",
				"fieldType": "input",
				"required": true
			}, {
				"name": "cluster",
				"label": "Enter the cluster.",
				"id": "cluster",
				"title": "Enter the cluster",
				"category": "Plugins",
				"type": "text",
				"fieldType": "input",
				"required": true
			}],
			"material_icon_color": "blue",
			"displayname": "Pusher Dynamic Auth Notification",
			"material_icon_bg_color": "bg_blue",
			"name": "Pusher Dynamic Auth Notification",
			"material_icon_img": "storage",
			"company": "Appup.com",
			"id": "pusher-plugin",
			"category": "Utilities",
			"info": "Pusher Dynamic  Auth Notification."
		}, {
			"thumbnail": "json/nodes/images/common/jsonio.png",
			"author": "Appup Developer",
			"icon": "json/nodes/icons/common/jsonio.png",
			"language": "en",
			"branches": "success,failure",
			"type": {
				"name": "pusher-dynamic"
			},
			"material_icon": "email",
			"workflow_tasklet_class_name": "com.appup.workflows.core.steps.pusher.PusherDynamicStepExecutor",
			"help": "Pusher notification message.",
			"ui": [{
				"options": {
					"Free Marker Template": "ftl",
					"Handlebar": "hb"
				},
				"name": "value_type",
				"label": "Template",
				"id": "value_type",
				"title": "Template",
				"category": "General",
				"type": "text",
				"fieldType": "select",
				"required": false
			}, {
				"name": "event_name",
				"label": "Enter event name",
				"id": "event_name",
				"title": "Enter event name.",
				"category": "General",
				"type": "text",
				"fieldType": "input",
				"required": true
			}, {
				"name": "message",
				"label": "Enter the notification message.",
				"id": "message",
				"title": "Enter the notification message",
				"category": "General",
				"type": "text",
				"fieldType": "input",
				"required": false
			}, {
				"name": "channel_name",
				"label": "Enter the channel name.",
				"id": "channel_name",
				"title": "Enter the channel name",
				"category": "General",
				"type": "text",
				"fieldType": "input",
				"required": false
			}, {
				"name": "output_variable",
				"label": "Enter the output variable.",
				"id": "output_variable",
				"title": "Enter the output variable",
				"category": "General",
				"type": "text",
				"fieldType": "input",
				"required": false
			}, {
				"name": "appId",
				"label": "Enter the app id",
				"id": "appId",
				"title": "Enter the app id",
				"category": "Plugins",
				"type": "text",
				"fieldType": "input",
				"required": true
			}, {
				"name": "key",
				"label": "Enter the key.",
				"id": "key",
				"title": "Enter the key",
				"category": "Plugins",
				"type": "text",
				"fieldType": "input",
				"required": true
			}, {
				"name": "secret",
				"label": "Enter the secret.",
				"id": "secret",
				"title": "Enter the secret",
				"category": "Plugins",
				"type": "text",
				"fieldType": "input",
				"required": true
			}, {
				"name": "cluster",
				"label": "Enter the cluster.",
				"id": "cluster",
				"title": "Enter the cluster",
				"category": "Plugins",
				"type": "text",
				"fieldType": "input",
				"required": true
			}],
			"material_icon_color": "blue",
			"displayname": "Pusher Dynamic Notification",
			"material_icon_bg_color": "bg_blue",
			"name": "Pusher Dynamic Notification",
			"material_icon_img": "storage",
			"company": "Appup.com",
			"id": "pusher-dynamic-plugin",
			"category": "Utilities",
			"info": "Pusher Dynamic Notification."
		}, {
			"thumbnail": "json/nodes/images/common/jsonio.png",
			"author": "Appup Developer",
			"icon": "json/nodes/icons/common/jsonio.png",
			"language": "en",
			"branches": "success,failure",
			"type": {
				"name": "pusher"
			},
			"material_icon": "email",
			"workflow_tasklet_class_name": "com.appup.workflows.core.steps.pusher.PusherStepExecutor",
			"help": "Pusher notification message.",
			"ui": [{
				"options": {
					"Free Marker Template": "ftl",
					"Handlebar": "hb"
				},
				"name": "value_type",
				"label": "Template",
				"id": "value_type",
				"title": "Template",
				"category": "General",
				"type": "text",
				"fieldType": "select",
				"required": false
			}, {
				"name": "event_name",
				"label": "Enter event name",
				"id": "event_name",
				"title": "Enter event name.",
				"category": "General",
				"type": "text",
				"fieldType": "input",
				"required": true
			}, {
				"name": "message",
				"label": "Enter the notification message.",
				"id": "message",
				"title": "Enter the notification message",
				"category": "General",
				"type": "text",
				"fieldType": "input",
				"required": false
			}, {
				"name": "channel_name",
				"label": "Enter the channel name.",
				"id": "channel_name",
				"title": "Enter the channel name",
				"category": "General",
				"type": "text",
				"fieldType": "input",
				"required": false
			}, {
				"name": "output_variable",
				"label": "Enter the output variable.",
				"id": "output_variable",
				"title": "Enter the output variable",
				"category": "General",
				"type": "text",
				"fieldType": "input",
				"required": false
			}, {
				"dynamicValue": "CONFIG_NAME",
				"dynamicName": "CONFIG_NAME",
				"name": "plugin_name",
				"label": "Enter pusher notification plugin name",
				"id": "plugin_name",
				"title": "Pusher",
				"category": "General",
				"type": "select",
				"fieldType": "dynamicselect",
				"url": "/app/getPluginConfig/{{app_id}}/pusher-plugin/",
				"required": true
			}],
			"material_icon_color": "blue",
			"displayname": "Pusher Notification",
			"material_icon_bg_color": "bg_blue",
			"name": "Pusher Notification",
			"material_icon_img": "storage",
			"company": "Appup.com",
			"id": "pusher-plugin",
			"category": "Utilities",
			"info": "Pusher Notification."
		}, {
			"thumbnail": "json/nodes/images/common/jsonio.png",
			"author": "Appup Developer",
			"icon": "json/nodes/images/common/jsonio.png",
			"language": "en",
			"branches": "success,failure",
			"type": {
				"name": "code-python"
			},
			"material_icon": "code",
			"workflow_tasklet_class_name": "com.appup.workflow.external.steps.python.PythonInlineStepExecutor",
			"help": "Executes uploaded Python code.",
			"ui": [{
				"name": "src",
				"label": "Source",
				"id": "file_path",
				"title": "Enter the Source code of Python.",
				"category": "Settings",
				"type": "textarea",
				"fieldType": "textarea",
				"required": true
			}, {
				"options": {
					"Free Marker Template": "ftl",
					"*Handlebar": "hb"
				},
				"name": "value_type",
				"label": "Select Template",
				"id": "value",
				"title": "Template type",
				"category": "Settings",
				"type": "select",
				"fieldType": "select",
				"required": true
			}, {
				"name": "output_variable",
				"label": "Set Result",
				"id": "output_variable",
				"title": "Set Result",
				"category": "General",
				"type": "text",
				"fieldType": "input",
				"required": false
			}],
			"material_icon_color": "blue",
			"displayname": "Python Code",
			"material_icon_bg_color": "bg_blue",
			"name": "Python Code",
			"material_icon_img": "storage",
			"company": "Appup.com",
			"id": "Python_code_step",
			"category": "Developers",
			"info": "Executes uploaded Python code."
		}, {
			"thumbnail": "json/nodes/images/new/redirect-node.png",
			"author": "Appup Developer",
			"icon": "json/nodes/icons/new/redirect.png",
			"language": "en",
			"branches": "success,failure",
			"type": {
				"name": "redirect"
			},
			"material_icon": "replay",
			"workflow_tasklet_class_name": "com.appup.workflows.core.steps.RedirectStepExecutor",
			"help": "Redirect Step",
			"ui": [{
				"name": "url",
				"label": "URL",
				"id": "url",
				"title": "Please enter a valid REST URL",
				"category": "Settings",
				"type": "text",
				"fieldType": "input",
				"required": true
			}, {
				"name": "status_code",
				"label": "Status Code",
				"id": "status_code",
				"title": "Please enter a valid status code",
				"category": "Settings",
				"type": "number",
				"fieldType": "input",
				"required": false
			}],
			"material_icon_color": "blue",
			"displayname": "Redirect",
			"material_icon_bg_color": "bg_blue",
			"name": "Redirect",
			"material_icon_img": "storage",
			"company": "Appup.com",
			"id": "Redirect_Step",
			"category": "Auth",
			"info": "Redirect Step"
		}, {
			"thumbnail": "json/nodes/images/common/jsonio.png",
			"author": "Appup Developer",
			"icon": "json/nodes/icons/common/jsonio.png",
			"language": "en",
			"branches": "success,failure,continue",
			"type": {
				"name": "rest-async-bulk"
			},
			"material_icon": "call_to_action",
			"workflow_tasklet_class_name": "com.appup.workflows.core.steps.rest.RestAsyncStepExecutor",
			"help": "Make a Bulk Async REST call.",
			"ui": [{
				"ui": [{
					"name": "url",
					"label": "Url",
					"id": "url",
					"title": "Enter the Url",
					"category": "General",
					"type": "text",
					"fieldType": "input",
					"required": true
				}, {
					"options": {
						"POST": "POST",
						"GET": "GET",
						"PUT": "PUT",
						"DELETE": "DELETE"
					},
					"name": "method",
					"label": "Method",
					"id": "method",
					"title": "HTTP Method",
					"category": "General",
					"type": "select",
					"fieldType": "select",
					"required": true
				}, {
					"name": "headers",
					"label": "Headers",
					"id": "headers",
					"title": "Enter the Headers",
					"category": "General",
					"type": "text",
					"fieldType": "input",
					"required": true
				}, {
					"name": "parameters",
					"label": "Parameters",
					"id": "parameters",
					"title": "Please enter params",
					"category": "General",
					"type": "text",
					"fieldType": "input",
					"required": true
				}, {
					"name": "output_variable",
					"label": "Output Variable",
					"id": "result",
					"title": "Enter the value",
					"category": "General",
					"type": "text",
					"fieldType": "input",
					"required": true
				}],
				"name": "restdata",
				"label": "Rest Information",
				"id": "restdata",
				"title": "Rest Information",
				"category": "General",
				"type": "grid",
				"fieldType": "grid",
				"required": false
			}, {
				"name": "output_variable",
				"label": "Result",
				"id": "result",
				"title": "Enter the value",
				"category": "General",
				"type": "text",
				"fieldType": "input",
				"required": false
			}, {
				"options": {
					"Free Marker Template": "ftl",
					"*Handlebar": "hb"
				},
				"name": "value_type",
				"label": "Select type",
				"id": "value_type",
				"title": "Type",
				"category": "General",
				"type": "select",
				"fieldType": "select",
				"required": false
			}, {
				"dynamicValue": "CONFIG_NAME",
				"dynamicName": "CONFIG_NAME",
				"name": "plugin_name",
				"label": "RestAsync Plugin",
				"id": "plugin_name",
				"title": "RestAsync Plugin",
				"category": "General",
				"type": "select",
				"fieldType": "dynamicselect",
				"url": "/app/getPluginConfig/{{app_id}}/rest-async/",
				"required": false
			}],
			"material_icon_color": "blue",
			"displayname": "REST Async Step(Bulk)",
			"material_icon_bg_color": "bg_blue",
			"name": "REST Async Step(Bulk)",
			"material_icon_img": "storage",
			"company": "Appup.com",
			"id": "rest-async-bulk",
			"category": "Utilities",
			"info": "Make a Bulk Async REST call."
		}, {
			"thumbnail": "json/nodes/images/common/jsonio.png",
			"author": "Appup Developer",
			"icon": "json/nodes/icons/common/jsonio.png",
			"language": "en",
			"branches": "continue",
			"type": {
				"name": "rest-dynamic"
			},
			"material_icon": "call_to_action",
			"workflow_tasklet_class_name": "com.appup.workflows.core.steps.rest.RestAsyncStepExecutor",
			"help": "Make a Async REST call.",
			"ui": [{
				"name": "url",
				"label": "URL",
				"id": "url",
				"title": "Please enter a valid REST URL",
				"category": "Settings",
				"type": "text",
				"fieldType": "input",
				"required": true
			}, {
				"name": "method",
				"label": "Method Type",
				"id": "method",
				"title": "Select the appropriate type for accessing the URL",
				"category": "Settings",
				"type": "text",
				"fieldType": "input",
				"required": true
			}, {
				"name": "query_parameters",
				"label": "Query Parameters",
				"id": "query_parameters",
				"title": "Please enter Dynamic Query params",
				"category": "Settings",
				"type": "text",
				"fieldType": "input",
				"required": true
			}, {
				"name": "headers",
				"label": "Headers",
				"id": "headers",
				"title": "Please enter Dynamic Headers",
				"category": "Settings",
				"type": "text",
				"fieldType": "input",
				"required": true
			}, {
				"name": "body_parameters",
				"label": "Body Parameters",
				"id": "body_parameters",
				"title": "Please enter Dynamic Body params",
				"category": "Settings",
				"type": "text",
				"fieldType": "input",
				"required": true
			}, {
				"name": "output_variable",
				"label": "Result",
				"id": "result",
				"title": "Enter the value",
				"category": "More Settings",
				"type": "text",
				"fieldType": "input",
				"required": false
			}, {
				"options": {
					"Free Marker Template": "ftl",
					"*Handlebar": "hb"
				},
				"name": "value_type",
				"label": "Select type",
				"id": "value_type",
				"title": "Type",
				"category": "More Settings",
				"type": "select",
				"fieldType": "select",
				"required": false
			}, {
				"dynamicValue": "CONFIG_NAME",
				"dynamicName": "CONFIG_NAME",
				"name": "plugin_name",
				"label": "RestAsync Plugin",
				"id": "plugin_name",
				"title": "RestAsync Plugin",
				"category": "General",
				"type": "select",
				"fieldType": "dynamicselect",
				"url": "/app/getPluginConfig/{{app_id}}/rest-async/",
				"required": false
			}],
			"material_icon_color": "blue",
			"displayname": "REST Async Step",
			"material_icon_bg_color": "bg_blue",
			"name": "REST Async Step",
			"material_icon_img": "storage",
			"company": "Appup.com",
			"id": "rest-dynamic",
			"category": "Utilities",
			"info": "Make a Async REST call."
		}, {
			"thumbnail": "json/nodes/images/common/jsonio.png",
			"author": "Appup Developer",
			"icon": "json/nodes/icons/common/jsonio.png",
			"language": "en",
			"branches": "success,failure",
			"type": {
				"name": "rest-binary-v2"
			},
			"material_icon": "call_to_action",
			"workflow_tasklet_class_name": "com.appup.workflows.core.steps.restv2.RestBinaryV2StepExecutor",
			"help": "Integrate your workflow with your web infrastructure using JSON. Push or retrieve data to/from your other applications.",
			"ui": [{
				"dynamicValue": "CONFIG_NAME",
				"dynamicName": "CONFIG_NAME",
				"name": "rest_plugin",
				"label": "Rest plugin",
				"id": "rest_plugin",
				"title": "Rest plugin",
				"category": "Settings",
				"type": "select",
				"fieldType": "dynamicselect",
				"url": "/app/getPluginConfig/{{app_id}}/rest-plugin/",
				"required": true
			}, {
				"name": "url",
				"label": "URL",
				"id": "url",
				"title": "Please enter a valid REST URL",
				"category": "Settings",
				"type": "text",
				"fieldType": "input",
				"required": true
			}, {
				"options": {
					"Delete": "DELETE",
					"Post": "POST",
					"Get": "GET",
					"Put": "PUT"
				},
				"name": "method",
				"label": "Method type",
				"id": "method",
				"title": "Select the appropriate type for accessing the URL",
				"category": "Settings",
				"type": "select",
				"fieldType": "select",
				"required": false
			}, {
				"ui": [{
					"name": "key",
					"label": "Key",
					"id": "key",
					"title": "Enter the key",
					"category": "Parameters",
					"type": "text",
					"fieldType": "input",
					"required": false
				}, {
					"name": "value",
					"label": "Value",
					"id": "result",
					"title": "Enter the value",
					"category": "Parameters",
					"type": "text",
					"fieldType": "input",
					"required": false
				}],
				"name": "query_parameters",
				"label": "Query Parameters",
				"id": " query_parameters",
				"title": "",
				"category": "Settings",
				"type": "grid",
				"fieldType": "grid"
			}, {
				"ui": [{
					"name": "key",
					"label": "Key",
					"id": "key",
					"title": "Enter the value",
					"category": "Settings",
					"type": "text",
					"fieldType": "input",
					"required": false
				}, {
					"name": "value",
					"label": "Value",
					"id": "result",
					"title": "Enter the value",
					"category": "Settings",
					"type": "text",
					"fieldType": "input",
					"required": false
				}],
				"name": "headers",
				"label": "Headers",
				"id": "headers",
				"title": "",
				"category": "Headers",
				"type": "grid",
				"fieldType": "grid",
				"required": false
			}, {
				"ui": [{
					"name": "key",
					"label": "Key",
					"id": "key",
					"title": "Enter the key",
					"category": "Body",
					"type": "text",
					"fieldType": "input",
					"required": false
				}, {
					"name": "value",
					"label": "Value",
					"id": "result",
					"title": "Enter the value",
					"category": "Body",
					"type": "text",
					"fieldType": "input",
					"required": false
				}, {
					"name": "type",
					"label": "Content Type",
					"id": "result",
					"title": "Enter the Content Type of the file.",
					"category": "Body",
					"type": "text",
					"fieldType": "input",
					"required": false
				}],
				"name": "body_parameters",
				"label": "Body Parameters",
				"id": "body_parameters",
				"title": "",
				"category": "Body",
				"type": "grid",
				"fieldType": "grid"
			}, {
				"name": "data_key",
				"label": "Data Key",
				"id": "data_key",
				"title": "Please enter File Content",
				"category": "Settings",
				"type": "text",
				"fieldType": "input",
				"required": false
			}, {
				"name": "body_enc_type",
				"label": "Data Key Content Type",
				"id": "body_enc_type",
				"title": "Please enter Content Type of data key.",
				"category": "Settings",
				"type": "text",
				"fieldType": "input",
				"required": false
			}, {
				"name": "output_variable",
				"label": "Result",
				"id": "result",
				"title": "Enter the value",
				"category": "More Settings",
				"type": "text",
				"fieldType": "input",
				"required": false
			}, {
				"options": {
					"Free Marker Template": "ftl",
					"*Handlebar": "hb"
				},
				"name": "value_type",
				"label": "Select type",
				"id": "value_type",
				"title": "Type",
				"category": "More Settings",
				"type": "select",
				"fieldType": "select",
				"required": false
			}],
			"material_icon_color": "blue",
			"displayname": "Rest Binary(V2)",
			"material_icon_bg_color": "bg_blue",
			"name": "Rest Binary(V2)",
			"material_icon_img": "storage",
			"company": "Appup.com",
			"id": "RestBinaryStep",
			"category": "Utilities",
			"info": "Integrate your workflow with your web infrastructure using JSON and file byteArray. Push or retrieve data to/from your other applications."
		}, {
			"thumbnail": "json/nodes/images/common/jsonio.png",
			"author": "Appup Developer",
			"icon": "json/nodes/icons/common/jsonio.png",
			"language": "en",
			"branches": "success,failure",
			"type": {
				"name": "rest-binary"
			},
			"material_icon": "call_to_action",
			"workflow_tasklet_class_name": "com.appup.workflows.core.steps.rest.RestBinaryStepExecutor",
			"help": "Integrate your workflow with your web infrastructure using JSON. Push or retrieve data to/from your other applications.",
			"ui": [{
				"name": "url",
				"label": "URL",
				"id": "url",
				"title": "Please enter a valid REST URL",
				"category": "Settings",
				"type": "text",
				"fieldType": "input",
				"required": true
			}, {
				"options": {
					"Delete": "DELETE",
					"Post": "POST",
					"Get": "GET",
					"Put": "PUT"
				},
				"name": "method",
				"label": "Method type",
				"id": "method",
				"title": "Select the appropriate type for accessing the URL",
				"category": "Settings",
				"type": "select",
				"fieldType": "select",
				"required": false
			}, {
				"ui": [{
					"name": "key",
					"label": "Key",
					"id": "key",
					"title": "Enter the key",
					"category": "Parameters",
					"type": "text",
					"fieldType": "input",
					"required": false
				}, {
					"name": "value",
					"label": "Value",
					"id": "result",
					"title": "Enter the value",
					"category": "Parameters",
					"type": "text",
					"fieldType": "input",
					"required": false
				}],
				"name": "query_parameters",
				"label": "Query Parameters",
				"id": " query_parameters",
				"title": "",
				"category": "Settings",
				"type": "grid",
				"fieldType": "grid"
			}, {
				"ui": [{
					"name": "key",
					"label": "Key",
					"id": "key",
					"title": "Enter the value",
					"category": "Settings",
					"type": "text",
					"fieldType": "input",
					"required": false
				}, {
					"name": "value",
					"label": "Value",
					"id": "result",
					"title": "Enter the value",
					"category": "Settings",
					"type": "text",
					"fieldType": "input",
					"required": false
				}],
				"name": "headers",
				"label": "Headers",
				"id": "headers",
				"title": "",
				"category": "Headers",
				"type": "grid",
				"fieldType": "grid",
				"required": false
			}, {
				"ui": [{
					"name": "key",
					"label": "Key",
					"id": "key",
					"title": "Enter the key",
					"category": "Body",
					"type": "text",
					"fieldType": "input",
					"required": false
				}, {
					"name": "value",
					"label": "Value",
					"id": "result",
					"title": "Enter the value",
					"category": "Body",
					"type": "text",
					"fieldType": "input",
					"required": false
				}, {
					"name": "type",
					"label": "Content Type",
					"id": "result",
					"title": "Enter the Content Type of the file.",
					"category": "Body",
					"type": "text",
					"fieldType": "input",
					"required": false
				}],
				"name": "body_parameters",
				"label": "Body Parameters",
				"id": "body_parameters",
				"title": "",
				"category": "Body",
				"type": "grid",
				"fieldType": "grid"
			}, {
				"name": "data_key",
				"label": "Data Key",
				"id": "data_key",
				"title": "Please enter File Content",
				"category": "Settings",
				"type": "text",
				"fieldType": "input",
				"required": false
			}, {
				"name": "body_enc_type",
				"label": "Data Key Content Type",
				"id": "body_enc_type",
				"title": "Please enter Content Type of data key.",
				"category": "Settings",
				"type": "text",
				"fieldType": "input",
				"required": false
			}, {
				"name": "output_variable",
				"label": "Result",
				"id": "result",
				"title": "Enter the value",
				"category": "More Settings",
				"type": "text",
				"fieldType": "input",
				"required": false
			}, {
				"name": "connectionTimeout",
				"label": "Connection Timeout",
				"id": "Connection Timeout",
				"title": "Enter the connection timeout is seconds",
				"category": "More Settings",
				"type": "text",
				"fieldType": "input",
				"required": false
			}, {
				"name": "readTimeout",
				"label": "Read Timeout",
				"id": "Read Timeout",
				"title": "Enter the read timeout in seconds.",
				"category": "More Settings",
				"type": "text",
				"fieldType": "input",
				"required": false
			}, {
				"options": {
					"Free Marker Template": "ftl",
					"*Handlebar": "hb"
				},
				"name": "value_type",
				"label": "Select type",
				"id": "value_type",
				"title": "Type",
				"category": "More Settings",
				"type": "select",
				"fieldType": "select",
				"required": false
			}],
			"material_icon_color": "blue",
			"displayname": "Rest Binary",
			"material_icon_bg_color": "bg_blue",
			"name": "Rest Binary",
			"material_icon_img": "storage",
			"company": "Appup.com",
			"id": "RestBinaryStep",
			"category": "Utilities",
			"info": "Integrate your workflow with your web infrastructure using JSON and file byteArray. Push or retrieve data to/from your other applications."
		}, {
			"thumbnail": "json/nodes/images/common/jsonio.png",
			"author": "Appup Developer",
			"icon": "json/nodes/icons/common/jsonio.png",
			"language": "en",
			"branches": "success,failure",
			"type": {
				"name": "rest-dynamic-step-v2"
			},
			"material_icon": "call_to_action",
			"workflow_tasklet_class_name": "com.appup.workflows.core.steps.restv2.RestDynamicV2StepExecutor",
			"help": "Make a Dynamic REST call.",
			"ui": [{
				"dynamicValue": "CONFIG_NAME",
				"dynamicName": "CONFIG_NAME",
				"name": "rest_plugin",
				"label": "Rest plugin",
				"id": "rest_plugin",
				"title": "Rest plugin",
				"category": "Settings",
				"type": "select",
				"fieldType": "dynamicselect",
				"url": "/app/getPluginConfig/{{app_id}}/rest-plugin/",
				"required": true
			}, {
				"name": "url",
				"label": "URL",
				"id": "url",
				"title": "Please enter a valid REST URL",
				"category": "Settings",
				"type": "text",
				"fieldType": "input",
				"required": true
			}, {
				"name": "method",
				"label": "Method Type",
				"id": "method",
				"title": "Select the appropriate type for accessing the URL",
				"category": "Settings",
				"type": "text",
				"fieldType": "input",
				"required": true
			}, {
				"name": "query_parameters",
				"label": "Query Parameters",
				"id": "query_parameters",
				"title": "Please enter Dynamic Query params",
				"category": "Settings",
				"type": "text",
				"fieldType": "input",
				"required": false
			}, {
				"name": "headers",
				"label": "Headers",
				"id": "headers",
				"title": "Please enter Dynamic Headers",
				"category": "Settings",
				"type": "text",
				"fieldType": "input",
				"required": false
			}, {
				"name": "body_parameters",
				"label": "Body Parameters",
				"id": "body_parameters",
				"title": "Please enter Dynamic Body params",
				"category": "Settings",
				"type": "text",
				"fieldType": "input",
				"required": false
			}, {
				"name": "raw",
				"label": "Raw",
				"id": "raw",
				"title": "Raw Body (Note: Raw body will be applicable if it meets the following condition  (Method type !=(Get,Options) && (Body is empty && Raw is not empty)) ) ",
				"category": "Raw Body",
				"type": "textarea",
				"fieldType": "textarea",
				"required": false
			}, {
				"name": "output_variable",
				"label": "Result",
				"id": "result",
				"title": "Enter the value",
				"category": "More Settings",
				"type": "text",
				"fieldType": "input",
				"required": false
			}, {
				"options": {
					"Free Marker Template": "ftl",
					"*Handlebar": "hb"
				},
				"name": "value_type",
				"label": "Select type",
				"id": "value_type",
				"title": "Type",
				"category": "More Settings",
				"type": "select",
				"fieldType": "select",
				"required": false
			}],
			"material_icon_color": "blue",
			"displayname": "REST Dynamic Step(V2)",
			"material_icon_bg_color": "bg_blue",
			"name": "REST Dynamic Step(V2)",
			"material_icon_img": "storage",
			"company": "Appup.com",
			"id": "rest-dynamic-step",
			"category": "Utilities",
			"info": "Make a  REST Dynamic call."
		}, {
			"thumbnail": "json/nodes/images/common/jsonio.png",
			"author": "Appup Developer",
			"icon": "json/nodes/icons/common/jsonio.png",
			"language": "en",
			"branches": "success,failure",
			"type": {
				"name": "rest-dynamic-step"
			},
			"material_icon": "call_to_action",
			"workflow_tasklet_class_name": "com.appup.workflows.core.steps.rest.RestDynamicStepExecutor",
			"help": "Make a Dynamic REST call.",
			"ui": [{
				"name": "url",
				"label": "URL",
				"id": "url",
				"title": "Please enter a valid REST URL",
				"category": "Settings",
				"type": "text",
				"fieldType": "input",
				"required": true
			}, {
				"name": "method",
				"label": "Method Type",
				"id": "method",
				"title": "Select the appropriate type for accessing the URL",
				"category": "Settings",
				"type": "text",
				"fieldType": "input",
				"required": true
			}, {
				"name": "query_parameters",
				"label": "Query Parameters",
				"id": "query_parameters",
				"title": "Please enter Dynamic Query params",
				"category": "Settings",
				"type": "text",
				"fieldType": "input",
				"required": false
			}, {
				"name": "headers",
				"label": "Headers",
				"id": "headers",
				"title": "Please enter Dynamic Headers",
				"category": "Settings",
				"type": "text",
				"fieldType": "input",
				"required": false
			}, {
				"name": "body_parameters",
				"label": "Body Parameters",
				"id": "body_parameters",
				"title": "Please enter Dynamic Body params",
				"category": "Settings",
				"type": "text",
				"fieldType": "input",
				"required": false
			}, {
				"name": "raw",
				"label": "Raw",
				"id": "raw",
				"title": "Raw Body (Note: Raw body will be applicable if it meets the following condition  (Method type !=(Get,Options) && (Body is empty && Raw is not empty)) ) ",
				"category": "Raw Body",
				"type": "textarea",
				"fieldType": "textarea",
				"required": false
			}, {
				"name": "output_variable",
				"label": "Result",
				"id": "result",
				"title": "Enter the value",
				"category": "More Settings",
				"type": "text",
				"fieldType": "input",
				"required": false
			}, {
				"options": {
					"Free Marker Template": "ftl",
					"*Handlebar": "hb"
				},
				"name": "value_type",
				"label": "Select type",
				"id": "value_type",
				"title": "Type",
				"category": "More Settings",
				"type": "select",
				"fieldType": "select",
				"required": false
			}],
			"material_icon_color": "blue",
			"displayname": "REST Dynamic Step",
			"material_icon_bg_color": "bg_blue",
			"name": "REST Dynamic Step",
			"material_icon_img": "storage",
			"company": "Appup.com",
			"id": "rest-dynamic-step",
			"category": "Utilities",
			"info": "Make a  REST Dynamic call."
		}, {
			"thumbnail": "json/nodes/images/common/jsonio.png",
			"author": "Appup Developer",
			"icon": "json/nodes/icons/common/jsonio.png",
			"language": "en",
			"branches": "success,failure",
			"type": {
				"name": "rest-enhance-v2"
			},
			"material_icon": "call_to_action",
			"workflow_tasklet_class_name": "com.appup.workflows.core.steps.restv2.RestEnhanceV2StepExecutor",
			"help": "Integrate your workflow with your web infrastructure using JSON. Push or retrieve data to/from your other applications.",
			"ui": [{
				"dynamicValue": "CONFIG_NAME",
				"dynamicName": "CONFIG_NAME",
				"name": "rest_plugin",
				"label": "Rest plugin",
				"id": "rest_plugin",
				"title": "Rest plugin",
				"category": "Settings",
				"type": "select",
				"fieldType": "dynamicselect",
				"url": "/app/getPluginConfig/{{app_id}}/rest-plugin/",
				"required": true
			}, {
				"name": "url",
				"label": "URL",
				"id": "url",
				"title": "Please enter a valid REST URL",
				"category": "Settings",
				"type": "text",
				"fieldType": "input",
				"required": true
			}, {
				"name": "raw",
				"label": "Raw",
				"id": "raw",
				"title": "Raw Bod (Note: Raw body will be applicable if it meets the following condition  (Method type !=(Get,Options) && (Body is empty && Raw is not empty)) ) ",
				"category": "Raw Body",
				"type": "textarea",
				"fieldType": "textarea",
				"required": false
			}, {
				"options": {
					"Delete": "DELETE",
					"Post": "POST",
					"Get": "GET",
					"Put": "PUT"
				},
				"name": "method",
				"label": "Method type",
				"id": "method",
				"title": "Select the appropriate type for accessing the URL",
				"category": "Settings",
				"type": "select",
				"fieldType": "select",
				"required": false
			}, {
				"ui": [{
					"name": "key",
					"label": "Key",
					"id": "key",
					"title": "Enter the key",
					"category": "Parameters",
					"type": "text",
					"fieldType": "input",
					"required": false
				}, {
					"name": "value",
					"label": "Value",
					"id": "result",
					"title": "Enter the value",
					"category": "Parameters",
					"type": "text",
					"fieldType": "input",
					"required": false
				}],
				"name": "query_parameters",
				"label": "Query Parameters",
				"id": "query_parameters",
				"title": "",
				"category": "Settings",
				"type": "grid",
				"fieldType": "grid"
			}, {
				"options": {
					"None": "default",
					"Basic": "basic",
					"OAuth 1.0": "oauth1.0"
				},
				"name": "auth_type",
				"label": "Type",
				"id": "auth_type",
				"title": "Select type of authentication",
				"category": "Authentication",
				"type": "select",
				"optgroup": true,
				"fieldType": "select",
				"event": "onchange",
				"eventHandler": "showAuthentication",
				"target_type": "Authentication-tab",
				"required": true
			}, {
				"name": "username",
				"label": "User Name",
				"id": "basic_username",
				"title": "User Name for Basic Oauth Type",
				"category": "Authentication",
				"type": "text",
				"fieldType": "input",
				"required": false
			}, {
				"name": "password",
				"label": "Password",
				"id": "basic_password",
				"title": "Password for Basic Oauth",
				"category": "Authentication",
				"type": "text",
				"fieldType": "input",
				"required": false
			}, {
				"name": "consumer_key",
				"label": "Consumer Key",
				"id": "oauth1.0_consumer_key",
				"title": "Consumer Key for Oauth 1.0",
				"category": "Authentication",
				"type": "text",
				"fieldType": "input",
				"required": false
			}, {
				"name": "consumer_secret",
				"label": "Consumer Secret",
				"id": "oauth1.0_consumer_secret",
				"title": "Consumer Secret for Oauth 1.0",
				"category": "Authentication",
				"type": "text",
				"fieldType": "input",
				"required": false
			}, {
				"name": "token",
				"label": "Token",
				"id": "oauth1.0_token",
				"title": "Token for Oauth 1.0",
				"category": "Authentication",
				"type": "text",
				"fieldType": "input",
				"required": false
			}, {
				"name": "secret",
				"label": "Secret",
				"id": "oauth1.0_secret",
				"title": "Secret for Oauth 1.0",
				"category": "Authentication",
				"type": "text",
				"fieldType": "input",
				"event": "onload",
				"eventHandler": "showAuthentication",
				"target_type": "Authentication-tab",
				"required": false
			}, {
				"ui": [{
					"name": "key",
					"label": "Key",
					"id": "key",
					"title": "Enter the value",
					"category": "Settings",
					"type": "text",
					"fieldType": "input",
					"required": false
				}, {
					"name": "value",
					"label": "Value",
					"id": "result",
					"title": "Enter the value",
					"category": "Settings",
					"type": "text",
					"fieldType": "input",
					"required": false
				}],
				"name": "headers",
				"label": "Headers",
				"id": "headers",
				"title": "",
				"category": "Headers",
				"type": "grid",
				"fieldType": "grid",
				"required": false
			}, {
				"options": {
					"Yes": "true",
					"*No": "false"
				},
				"name": "include_request_info",
				"label": "Do you want to add appup headers,query and body params",
				"id": "include_request_info",
				"title": "Do you want to add appup headers,query and body params",
				"category": "Headers",
				"type": "select",
				"fieldType": "select",
				"required": false
			}, {
				"ui": [{
					"name": "key",
					"label": "Key",
					"id": "key",
					"title": "Enter the key",
					"category": "Body",
					"type": "text",
					"fieldType": "input",
					"required": false
				}, {
					"name": "value",
					"label": "Value",
					"id": "result",
					"title": "Enter the value",
					"category": "Body",
					"type": "text",
					"fieldType": "input",
					"required": false
				}],
				"name": "body_parameters",
				"label": "Body Parameters",
				"id": "body_parameters",
				"title": "",
				"category": "Body",
				"type": "grid",
				"fieldType": "grid"
			}, {
				"name": "output_variable",
				"label": "Result",
				"id": "result",
				"title": "Enter the value",
				"category": "More Settings",
				"type": "text",
				"fieldType": "input",
				"required": false
			}, {
				"options": {
					"Free Marker Template": "ftl",
					"*Handlebar": "hb"
				},
				"name": "value_type",
				"label": "Select type",
				"id": "value_type",
				"title": "Type",
				"category": "More Settings",
				"type": "select",
				"fieldType": "select",
				"required": false
			}],
			"material_icon_color": "blue",
			"displayname": "REST with Appup Headers(V2)",
			"material_icon_bg_color": "bg_blue",
			"name": "REST with Appup Headers(V2)",
			"material_icon_img": "storage",
			"company": "Appup.com",
			"id": "restStep",
			"category": "Utilities",
			"info": "Integrate your workflow with your web infrastructure using JSON. Push or retrieve data to/from your other applications."
		}, {
			"thumbnail": "json/nodes/images/common/jsonio.png",
			"author": "Appup Developer",
			"icon": "json/nodes/icons/common/jsonio.png",
			"language": "en",
			"branches": "success,failure",
			"type": {
				"name": "rest-enhance"
			},
			"material_icon": "call_to_action",
			"workflow_tasklet_class_name": "com.appup.workflows.core.steps.rest.RestEnhanceStepExecutor",
			"help": "Integrate your workflow with your web infrastructure using JSON. Push or retrieve data to/from your other applications.",
			"ui": [{
				"name": "url",
				"label": "URL",
				"id": "url",
				"title": "Please enter a valid REST URL",
				"category": "Settings",
				"type": "text",
				"fieldType": "input",
				"required": true
			}, {
				"name": "raw",
				"label": "Raw",
				"id": "raw",
				"title": "Raw Bod (Note: Raw body will be applicable if it meets the following condition  (Method type !=(Get,Options) && (Body is empty && Raw is not empty)) ) ",
				"category": "Raw Body",
				"type": "textarea",
				"fieldType": "textarea",
				"required": false
			}, {
				"options": {
					"Delete": "DELETE",
					"Post": "POST",
					"Get": "GET",
					"Put": "PUT"
				},
				"name": "method",
				"label": "Method type",
				"id": "method",
				"title": "Select the appropriate type for accessing the URL",
				"category": "Settings",
				"type": "select",
				"fieldType": "select",
				"required": false
			}, {
				"ui": [{
					"name": "key",
					"label": "Key",
					"id": "key",
					"title": "Enter the key",
					"category": "Parameters",
					"type": "text",
					"fieldType": "input",
					"required": false
				}, {
					"name": "value",
					"label": "Value",
					"id": "result",
					"title": "Enter the value",
					"category": "Parameters",
					"type": "text",
					"fieldType": "input",
					"required": false
				}],
				"name": "query_parameters",
				"label": "Query Parameters",
				"id": "query_parameters",
				"title": "",
				"category": "Settings",
				"type": "grid",
				"fieldType": "grid"
			}, {
				"options": {
					"None": "default",
					"Basic": "basic",
					"OAuth 1.0": "oauth1.0"
				},
				"name": "auth_type",
				"label": "Type",
				"id": "auth_type",
				"title": "Select type of authentication",
				"category": "Authentication",
				"type": "select",
				"optgroup": true,
				"fieldType": "select",
				"event": "onchange",
				"eventHandler": "showAuthentication",
				"target_type": "Authentication-tab",
				"required": true
			}, {
				"name": "username",
				"label": "User Name",
				"id": "basic_username",
				"title": "User Name for Basic Oauth Type",
				"category": "Authentication",
				"type": "text",
				"fieldType": "input",
				"required": false
			}, {
				"name": "password",
				"label": "Password",
				"id": "basic_password",
				"title": "Password for Basic Oauth",
				"category": "Authentication",
				"type": "text",
				"fieldType": "input",
				"required": false
			}, {
				"name": "consumer_key",
				"label": "Consumer Key",
				"id": "oauth1.0_consumer_key",
				"title": "Consumer Key for Oauth 1.0",
				"category": "Authentication",
				"type": "text",
				"fieldType": "input",
				"required": false
			}, {
				"name": "consumer_secret",
				"label": "Consumer Secret",
				"id": "oauth1.0_consumer_secret",
				"title": "Consumer Secret for Oauth 1.0",
				"category": "Authentication",
				"type": "text",
				"fieldType": "input",
				"required": false
			}, {
				"name": "token",
				"label": "Token",
				"id": "oauth1.0_token",
				"title": "Token for Oauth 1.0",
				"category": "Authentication",
				"type": "text",
				"fieldType": "input",
				"required": false
			}, {
				"name": "secret",
				"label": "Secret",
				"id": "oauth1.0_secret",
				"title": "Secret for Oauth 1.0",
				"category": "Authentication",
				"type": "text",
				"fieldType": "input",
				"event": "onload",
				"eventHandler": "showAuthentication",
				"target_type": "Authentication-tab",
				"required": false
			}, {
				"ui": [{
					"name": "key",
					"label": "Key",
					"id": "key",
					"title": "Enter the value",
					"category": "Settings",
					"type": "text",
					"fieldType": "input",
					"required": false
				}, {
					"name": "value",
					"label": "Value",
					"id": "result",
					"title": "Enter the value",
					"category": "Settings",
					"type": "text",
					"fieldType": "input",
					"required": false
				}],
				"name": "headers",
				"label": "Headers",
				"id": "headers",
				"title": "",
				"category": "Headers",
				"type": "grid",
				"fieldType": "grid",
				"required": false
			}, {
				"options": {
					"Yes": "true",
					"*No": "false"
				},
				"name": "include_request_info",
				"label": "Do you want to add appup headers,query and body params",
				"id": "include_request_info",
				"title": "Do you want to add appup headers,query and body params",
				"category": "Headers",
				"type": "select",
				"fieldType": "select",
				"required": false
			}, {
				"ui": [{
					"name": "key",
					"label": "Key",
					"id": "key",
					"title": "Enter the key",
					"category": "Body",
					"type": "text",
					"fieldType": "input",
					"required": false
				}, {
					"name": "value",
					"label": "Value",
					"id": "result",
					"title": "Enter the value",
					"category": "Body",
					"type": "text",
					"fieldType": "input",
					"required": false
				}],
				"name": "body_parameters",
				"label": "Body Parameters",
				"id": "body_parameters",
				"title": "",
				"category": "Body",
				"type": "grid",
				"fieldType": "grid"
			}, {
				"name": "output_variable",
				"label": "Result",
				"id": "result",
				"title": "Enter the value",
				"category": "More Settings",
				"type": "text",
				"fieldType": "input",
				"required": false
			}, {
				"options": {
					"Free Marker Template": "ftl",
					"*Handlebar": "hb"
				},
				"name": "value_type",
				"label": "Select type",
				"id": "value_type",
				"title": "Type",
				"category": "More Settings",
				"type": "select",
				"fieldType": "select",
				"required": false
			}],
			"material_icon_color": "blue",
			"displayname": "REST with Appup Headers",
			"material_icon_bg_color": "bg_blue",
			"name": "REST with Appup Headers",
			"material_icon_img": "storage",
			"company": "Appup.com",
			"id": "restStep",
			"category": "Utilities",
			"info": "Integrate your workflow with your web infrastructure using JSON. Push or retrieve data to/from your other applications."
		}, {
			"thumbnail": "json/nodes/images/common/jsonio.png",
			"author": "Appup Developer",
			"icon": "json/nodes/icons/common/jsonio.png",
			"language": "en",
			"branches": "success,failure",
			"type": {
				"name": "rest-oauth-10-v2"
			},
			"material_icon": "call_to_action",
			"workflow_tasklet_class_name": "com.appup.workflows.core.steps.restv2.RestOauth10V2StepExecutor",
			"help": "Integrate your workflow with your web infrastructure using JSON. Push or retrieve data to/from your other applications.",
			"ui": [{
				"name": "url",
				"label": "URL",
				"id": "url",
				"title": "Please enter a valid REST URL",
				"category": "Settings",
				"type": "text",
				"fieldType": "input",
				"required": true
			}, {
				"options": {
					"Delete": "DELETE",
					"Post": "POST",
					"Get": "GET",
					"Put": "PUT"
				},
				"name": "method",
				"label": "Method type",
				"id": "method",
				"title": "Select the appropriate type for accessing the URL",
				"category": "Settings",
				"type": "select",
				"fieldType": "select",
				"required": false
			}, {
				"ui": [{
					"name": "key",
					"label": "Key",
					"id": "key",
					"title": "Enter the key",
					"category": "Parameters",
					"type": "text",
					"fieldType": "input",
					"required": false
				}, {
					"name": "value",
					"label": "Value",
					"id": "result",
					"title": "Enter the value",
					"category": "Parameters",
					"type": "text",
					"fieldType": "input",
					"required": false
				}],
				"name": "query_parameters",
				"label": "Query Parameters",
				"id": "query_parameters",
				"title": "",
				"category": "Settings",
				"type": "grid",
				"fieldType": "grid"
			}, {
				"name": "consumer_key",
				"label": "Consumer Key",
				"id": "oauth1.0_consumer_key",
				"title": "Consumer Key for Oauth 1.0",
				"category": "Auth Info",
				"type": "text",
				"fieldType": "input",
				"required": false
			}, {
				"name": "consumer_secret",
				"label": "Consumer Secret",
				"id": "oauth1.0_consumer_secret",
				"title": "Consumer Secret for Oauth 1.0",
				"category": "Auth Info",
				"type": "text",
				"fieldType": "input",
				"required": false
			}, {
				"name": "token",
				"label": "Token",
				"id": "oauth1.0_token",
				"title": "Token for Oauth 1.0",
				"category": "Auth Info",
				"type": "text",
				"fieldType": "input",
				"required": false
			}, {
				"name": "secret",
				"label": "Secret",
				"id": "oauth1.0_secret",
				"title": "Secret for Oauth 1.0",
				"category": "Auth Info",
				"type": "text",
				"fieldType": "input",
				"required": false
			}, {
				"ui": [{
					"name": "key",
					"label": "Key",
					"id": "key",
					"title": "Enter the value",
					"category": "Settings",
					"type": "text",
					"fieldType": "input",
					"required": false
				}, {
					"name": "value",
					"label": "Value",
					"id": "result",
					"title": "Enter the value",
					"category": "Settings",
					"type": "text",
					"fieldType": "input",
					"required": false
				}],
				"name": "headers",
				"label": "Headers",
				"id": "headers",
				"title": "",
				"category": "Headers",
				"type": "grid",
				"fieldType": "grid",
				"required": false
			}, {
				"ui": [{
					"name": "key",
					"label": "Key",
					"id": "key",
					"title": "Enter the key",
					"category": "Body",
					"type": "text",
					"fieldType": "input",
					"required": false
				}, {
					"name": "value",
					"label": "Value",
					"id": "result",
					"title": "Enter the value",
					"category": "Body",
					"type": "text",
					"fieldType": "input",
					"required": false
				}],
				"name": "body_parameters",
				"label": "Body Parameters",
				"id": "body_parameters",
				"title": "",
				"category": "Body",
				"type": "grid",
				"fieldType": "grid"
			}, {
				"name": "output_variable",
				"label": "Result",
				"id": "result",
				"title": "Enter the value",
				"category": "More Settings",
				"type": "text",
				"fieldType": "input",
				"required": false
			}, {
				"options": {
					"Free Marker Template": "ftl",
					"*Handlebar": "hb"
				},
				"name": "value_type",
				"label": "Select type",
				"id": "value_type",
				"title": "Type",
				"category": "More Settings",
				"type": "select",
				"fieldType": "select",
				"required": false
			}, {
				"dynamicValue": "CONFIG_NAME",
				"dynamicName": "CONFIG_NAME",
				"name": "rest_plugin",
				"label": "Rest plugin",
				"id": "rest_plugin",
				"title": "Rest plugin",
				"category": "Settings",
				"type": "select",
				"fieldType": "dynamicselect",
				"url": "/app/getPluginConfig/{{app_id}}/rest-plugin/",
				"required": true
			}],
			"material_icon_color": "blue",
			"displayname": "REST OAUTH 1.0(V2)",
			"material_icon_bg_color": "bg_blue",
			"name": "REST OAUTH 1.0(V2)",
			"material_icon_img": "storage",
			"company": "Appup.com",
			"id": "restAuth10Step",
			"category": "Utilities",
			"info": "Integrate your workflow with your web infrastructure using JSON. Push or retrieve data to/from your other applications."
		}, {
			"thumbnail": "json/nodes/images/common/jsonio.png",
			"author": "Appup Developer",
			"icon": "json/nodes/icons/common/jsonio.png",
			"language": "en",
			"branches": "success,failure",
			"type": {
				"name": "rest-oauth-10"
			},
			"material_icon": "call_to_action",
			"workflow_tasklet_class_name": "com.appup.workflows.core.steps.rest.RestOauth10StepExecutor",
			"help": "Integrate your workflow with your web infrastructure using JSON. Push or retrieve data to/from your other applications.",
			"ui": [{
				"name": "url",
				"label": "URL",
				"id": "url",
				"title": "Please enter a valid REST URL",
				"category": "Settings",
				"type": "text",
				"fieldType": "input",
				"required": true
			}, {
				"options": {
					"Delete": "DELETE",
					"Post": "POST",
					"Get": "GET",
					"Put": "PUT"
				},
				"name": "method",
				"label": "Method type",
				"id": "method",
				"title": "Select the appropriate type for accessing the URL",
				"category": "Settings",
				"type": "select",
				"fieldType": "select",
				"required": false
			}, {
				"ui": [{
					"name": "key",
					"label": "Key",
					"id": "key",
					"title": "Enter the key",
					"category": "Parameters",
					"type": "text",
					"fieldType": "input",
					"required": false
				}, {
					"name": "value",
					"label": "Value",
					"id": "result",
					"title": "Enter the value",
					"category": "Parameters",
					"type": "text",
					"fieldType": "input",
					"required": false
				}],
				"name": "query_parameters",
				"label": "Query Parameters",
				"id": "query_parameters",
				"title": "",
				"category": "Settings",
				"type": "grid",
				"fieldType": "grid"
			}, {
				"name": "consumer_key",
				"label": "Consumer Key",
				"id": "oauth1.0_consumer_key",
				"title": "Consumer Key for Oauth 1.0",
				"category": "Auth Info",
				"type": "text",
				"fieldType": "input",
				"required": false
			}, {
				"name": "consumer_secret",
				"label": "Consumer Secret",
				"id": "oauth1.0_consumer_secret",
				"title": "Consumer Secret for Oauth 1.0",
				"category": "Auth Info",
				"type": "text",
				"fieldType": "input",
				"required": false
			}, {
				"name": "token",
				"label": "Token",
				"id": "oauth1.0_token",
				"title": "Token for Oauth 1.0",
				"category": "Auth Info",
				"type": "text",
				"fieldType": "input",
				"required": false
			}, {
				"name": "secret",
				"label": "Secret",
				"id": "oauth1.0_secret",
				"title": "Secret for Oauth 1.0",
				"category": "Auth Info",
				"type": "text",
				"fieldType": "input",
				"required": false
			}, {
				"ui": [{
					"name": "key",
					"label": "Key",
					"id": "key",
					"title": "Enter the value",
					"category": "Settings",
					"type": "text",
					"fieldType": "input",
					"required": false
				}, {
					"name": "value",
					"label": "Value",
					"id": "result",
					"title": "Enter the value",
					"category": "Settings",
					"type": "text",
					"fieldType": "input",
					"required": false
				}],
				"name": "headers",
				"label": "Headers",
				"id": "headers",
				"title": "",
				"category": "Headers",
				"type": "grid",
				"fieldType": "grid",
				"required": false
			}, {
				"ui": [{
					"name": "key",
					"label": "Key",
					"id": "key",
					"title": "Enter the key",
					"category": "Body",
					"type": "text",
					"fieldType": "input",
					"required": false
				}, {
					"name": "value",
					"label": "Value",
					"id": "result",
					"title": "Enter the value",
					"category": "Body",
					"type": "text",
					"fieldType": "input",
					"required": false
				}],
				"name": "body_parameters",
				"label": "Body Parameters",
				"id": "body_parameters",
				"title": "",
				"category": "Body",
				"type": "grid",
				"fieldType": "grid"
			}, {
				"name": "output_variable",
				"label": "Result",
				"id": "result",
				"title": "Enter the value",
				"category": "More Settings",
				"type": "text",
				"fieldType": "input",
				"required": false
			}, {
				"options": {
					"Free Marker Template": "ftl",
					"*Handlebar": "hb"
				},
				"name": "value_type",
				"label": "Select type",
				"id": "value_type",
				"title": "Type",
				"category": "More Settings",
				"type": "select",
				"fieldType": "select",
				"required": false
			}],
			"material_icon_color": "blue",
			"displayname": "REST OAUTH 1.0",
			"material_icon_bg_color": "bg_blue",
			"name": "REST OAUTH 1.0",
			"material_icon_img": "storage",
			"company": "Appup.com",
			"id": "restAuth10Step",
			"category": "Utilities",
			"info": "Integrate your workflow with your web infrastructure using JSON. Push or retrieve data to/from your other applications."
		}, {
			"thumbnail": "json/nodes/images/common/jsonio.png",
			"author": "Appup Developer",
			"icon": "json/nodes/icons/common/jsonio.png",
			"language": "en",
			"branches": "success,failure",
			"type": {
				"name": "rest-oauth-basic-v2"
			},
			"material_icon": "call_to_action",
			"workflow_tasklet_class_name": "com.appup.workflows.core.steps.restv2.RestOauthV2BasicStepExecutor",
			"help": "Integrate your workflow with your web infrastructure using JSON. Push or retrieve data to/from your other applications.",
			"ui": [{
				"name": "url",
				"label": "URL",
				"id": "url",
				"title": "Please enter a valid REST URL",
				"category": "Settings",
				"type": "text",
				"fieldType": "input",
				"required": true
			}, {
				"options": {
					"Delete": "DELETE",
					"Post": "POST",
					"Get": "GET",
					"Put": "PUT"
				},
				"name": "method",
				"label": "Method type",
				"id": "method",
				"title": "Select the appropriate type for accessing the URL",
				"category": "Settings",
				"type": "select",
				"fieldType": "select",
				"required": false
			}, {
				"ui": [{
					"name": "key",
					"label": "Key",
					"id": "key",
					"title": "Enter the key",
					"category": "Parameters",
					"type": "text",
					"fieldType": "input",
					"required": false
				}, {
					"name": "value",
					"label": "Value",
					"id": "result",
					"title": "Enter the value",
					"category": "Parameters",
					"type": "text",
					"fieldType": "input",
					"required": false
				}],
				"name": "query_parameters",
				"label": "Query Parameters",
				"id": "query_parameters",
				"title": "",
				"category": "Settings",
				"type": "grid",
				"fieldType": "grid"
			}, {
				"name": "username",
				"label": "User Name",
				"id": "basic_username",
				"title": "User Name for Basic Oauth Type",
				"category": "Auth Info",
				"type": "text",
				"fieldType": "input",
				"required": false
			}, {
				"name": "password",
				"label": "Password",
				"id": "basic_password",
				"title": "Password for Basic Oauth",
				"category": "Auth Info",
				"type": "text",
				"fieldType": "input",
				"required": false
			}, {
				"ui": [{
					"name": "key",
					"label": "Key",
					"id": "key",
					"title": "Enter the value",
					"category": "Settings",
					"type": "text",
					"fieldType": "input",
					"required": false
				}, {
					"name": "value",
					"label": "Value",
					"id": "result",
					"title": "Enter the value",
					"category": "Settings",
					"type": "text",
					"fieldType": "input",
					"required": false
				}],
				"name": "headers",
				"label": "Headers",
				"id": "headers",
				"title": "",
				"category": "Headers",
				"type": "grid",
				"fieldType": "grid",
				"required": false
			}, {
				"ui": [{
					"name": "key",
					"label": "Key",
					"id": "key",
					"title": "Enter the key",
					"category": "Body",
					"type": "text",
					"fieldType": "input",
					"required": false
				}, {
					"name": "value",
					"label": "Value",
					"id": "result",
					"title": "Enter the value",
					"category": "Body",
					"type": "text",
					"fieldType": "input",
					"required": false
				}],
				"name": "body_parameters",
				"label": "Body Parameters",
				"id": "body_parameters",
				"title": "",
				"category": "Body",
				"type": "grid",
				"fieldType": "grid"
			}, {
				"name": "output_variable",
				"label": "Result",
				"id": "result",
				"title": "Enter the value",
				"category": "More Settings",
				"type": "text",
				"fieldType": "input",
				"required": false
			}, {
				"options": {
					"Free Marker Template": "ftl",
					"*Handlebar": "hb"
				},
				"name": "value_type",
				"label": "Select type",
				"id": "value_type",
				"title": "Type",
				"category": "More Settings",
				"type": "select",
				"fieldType": "select",
				"required": false
			}, {
				"dynamicValue": "CONFIG_NAME",
				"dynamicName": "CONFIG_NAME",
				"name": "rest_plugin",
				"label": "Rest plugin",
				"id": "rest_plugin",
				"title": "Rest plugin",
				"category": "Settings",
				"type": "select",
				"fieldType": "dynamicselect",
				"url": "/app/getPluginConfig/{{app_id}}/rest-plugin/",
				"required": true
			}],
			"material_icon_color": "blue",
			"displayname": "REST OAUTH BASIC(V2)",
			"material_icon_bg_color": "bg_blue",
			"name": "REST OAUTH BASIC(V2)",
			"material_icon_img": "storage",
			"company": "Appup.com",
			"id": "restBasicOauthStep",
			"category": "Utilities",
			"info": "Integrate your workflow with your web infrastructure using JSON. Push or retrieve data to/from your other applications."
		}, {
			"thumbnail": "json/nodes/images/common/jsonio.png",
			"author": "Appup Developer",
			"icon": "json/nodes/icons/common/jsonio.png",
			"language": "en",
			"branches": "success,failure",
			"type": {
				"name": "rest-oauth-basic"
			},
			"material_icon": "call_to_action",
			"workflow_tasklet_class_name": "com.appup.workflows.core.steps.rest.RestOauthBasicStepExecutor",
			"help": "Integrate your workflow with your web infrastructure using JSON. Push or retrieve data to/from your other applications.",
			"ui": [{
				"name": "url",
				"label": "URL",
				"id": "url",
				"title": "Please enter a valid REST URL",
				"category": "Settings",
				"type": "text",
				"fieldType": "input",
				"required": true
			}, {
				"options": {
					"Delete": "DELETE",
					"Post": "POST",
					"Get": "GET",
					"Put": "PUT"
				},
				"name": "method",
				"label": "Method type",
				"id": "method",
				"title": "Select the appropriate type for accessing the URL",
				"category": "Settings",
				"type": "select",
				"fieldType": "select",
				"required": false
			}, {
				"ui": [{
					"name": "key",
					"label": "Key",
					"id": "key",
					"title": "Enter the key",
					"category": "Parameters",
					"type": "text",
					"fieldType": "input",
					"required": false
				}, {
					"name": "value",
					"label": "Value",
					"id": "result",
					"title": "Enter the value",
					"category": "Parameters",
					"type": "text",
					"fieldType": "input",
					"required": false
				}],
				"name": "query_parameters",
				"label": "Query Parameters",
				"id": "query_parameters",
				"title": "",
				"category": "Settings",
				"type": "grid",
				"fieldType": "grid"
			}, {
				"name": "username",
				"label": "User Name",
				"id": "basic_username",
				"title": "User Name for Basic Oauth Type",
				"category": "Auth Info",
				"type": "text",
				"fieldType": "input",
				"required": false
			}, {
				"name": "password",
				"label": "Password",
				"id": "basic_password",
				"title": "Password for Basic Oauth",
				"category": "Auth Info",
				"type": "text",
				"fieldType": "input",
				"required": false
			}, {
				"ui": [{
					"name": "key",
					"label": "Key",
					"id": "key",
					"title": "Enter the value",
					"category": "Settings",
					"type": "text",
					"fieldType": "input",
					"required": false
				}, {
					"name": "value",
					"label": "Value",
					"id": "result",
					"title": "Enter the value",
					"category": "Settings",
					"type": "text",
					"fieldType": "input",
					"required": false
				}],
				"name": "headers",
				"label": "Headers",
				"id": "headers",
				"title": "",
				"category": "Headers",
				"type": "grid",
				"fieldType": "grid",
				"required": false
			}, {
				"ui": [{
					"name": "key",
					"label": "Key",
					"id": "key",
					"title": "Enter the key",
					"category": "Body",
					"type": "text",
					"fieldType": "input",
					"required": false
				}, {
					"name": "value",
					"label": "Value",
					"id": "result",
					"title": "Enter the value",
					"category": "Body",
					"type": "text",
					"fieldType": "input",
					"required": false
				}],
				"name": "body_parameters",
				"label": "Body Parameters",
				"id": "body_parameters",
				"title": "",
				"category": "Body",
				"type": "grid",
				"fieldType": "grid"
			}, {
				"name": "output_variable",
				"label": "Result",
				"id": "result",
				"title": "Enter the value",
				"category": "More Settings",
				"type": "text",
				"fieldType": "input",
				"required": false
			}, {
				"options": {
					"Free Marker Template": "ftl",
					"*Handlebar": "hb"
				},
				"name": "value_type",
				"label": "Select type",
				"id": "value_type",
				"title": "Type",
				"category": "More Settings",
				"type": "select",
				"fieldType": "select",
				"required": false
			}],
			"material_icon_color": "blue",
			"displayname": "REST OAUTH BASIC",
			"material_icon_bg_color": "bg_blue",
			"name": "REST OAUTH BASIC",
			"material_icon_img": "storage",
			"company": "Appup.com",
			"id": "restBasicOauthStep",
			"category": "Utilities",
			"info": "Integrate your workflow with your web infrastructure using JSON. Push or retrieve data to/from your other applications."
		}, {
			"thumbnail": "json/nodes/images/common/jsonio.png",
			"author": "Appup Developer",
			"icon": "json/nodes/icons/common/jsonio.png",
			"language": "en",
			"branches": "success,failure",
			"type": {
				"name": "rest-simple-v2"
			},
			"material_icon": "call_to_action",
			"workflow_tasklet_class_name": "com.appup.workflows.core.steps.restv2.RestSimpleV2StepExecutor",
			"help": "Integrate your workflow with your web infrastructure using JSON. Push or retrieve data to/from your other applications.",
			"ui": [{
				"dynamicValue": "CONFIG_NAME",
				"dynamicName": "CONFIG_NAME",
				"name": "rest_plugin",
				"label": "Rest plugin",
				"id": "rest_plugin",
				"title": "Rest plugin",
				"category": "Settings",
				"type": "select",
				"fieldType": "dynamicselect",
				"url": "/app/getPluginConfig/{{app_id}}/rest-plugin/",
				"required": true
			}, {
				"name": "url",
				"label": "URL",
				"id": "url",
				"title": "Please enter a valid REST URL",
				"category": "Settings",
				"type": "text",
				"fieldType": "input",
				"required": true
			}, {
				"name": "method",
				"label": "Method type",
				"id": "method",
				"title": "Select the appropriate type for accessing the URL",
				"category": "Settings",
				"type": "text",
				"fieldType": "input",
				"required": true
			}, {
				"ui": [{
					"name": "key",
					"label": "Key",
					"id": "key",
					"title": "Enter the key",
					"category": "Parameters",
					"type": "text",
					"fieldType": "input",
					"required": false
				}, {
					"name": "value",
					"label": "Value",
					"id": "result",
					"title": "Enter the value",
					"category": "Parameters",
					"type": "text",
					"fieldType": "input",
					"required": false
				}],
				"name": "query_parameters",
				"label": "Query Parameters",
				"id": "query_parameters",
				"title": "",
				"category": "Settings",
				"type": "grid",
				"fieldType": "grid"
			}, {
				"ui": [{
					"name": "key",
					"label": "Key",
					"id": "key",
					"title": "Enter the value",
					"category": "Settings",
					"type": "text",
					"fieldType": "input",
					"required": false
				}, {
					"name": "value",
					"label": "Value",
					"id": "result",
					"title": "Enter the value",
					"category": "Settings",
					"type": "text",
					"fieldType": "input",
					"required": false
				}],
				"name": "headers",
				"label": "Headers",
				"id": "headers",
				"title": "",
				"category": "Headers",
				"type": "grid",
				"fieldType": "grid",
				"required": false
			}, {
				"ui": [{
					"name": "key",
					"label": "Key",
					"id": "key",
					"title": "Enter the key",
					"category": "Body",
					"type": "text",
					"fieldType": "input",
					"required": false
				}, {
					"name": "value",
					"label": "Value",
					"id": "result",
					"title": "Enter the value",
					"category": "Body",
					"type": "text",
					"fieldType": "input",
					"required": false
				}],
				"name": "body_parameters",
				"label": "Body Parameters",
				"id": "body_parameters",
				"title": "",
				"category": "Body",
				"type": "grid",
				"fieldType": "grid"
			}, {
				"name": "raw",
				"label": "Raw",
				"id": "raw",
				"title": "Raw Body (Note: Raw body will be applicable if it meets the following condition  (Method type !=(Get,Options) && (Body is empty && Raw is not empty)) ) ",
				"category": "Raw Body",
				"type": "textarea",
				"fieldType": "textarea",
				"required": false
			}, {
				"name": "output_variable",
				"label": "Result",
				"id": "result",
				"title": "Enter the value",
				"category": "More Settings",
				"type": "text",
				"fieldType": "input",
				"required": false
			}, {
				"options": {
					"Free Marker Template": "ftl",
					"*Handlebar": "hb"
				},
				"name": "value_type",
				"label": "Select type",
				"id": "value_type",
				"title": "Type",
				"category": "More Settings",
				"type": "select",
				"fieldType": "select",
				"required": false
			}],
			"material_icon_color": "blue",
			"displayname": "REST STEP WITH DYNAMIC METHODS(V2)",
			"material_icon_bg_color": "bg_blue",
			"name": "REST STEP WITH DYNAMIC METHODS(V2)",
			"material_icon_img": "storage",
			"company": "Appup.com",
			"id": "Rest Dynamic method step",
			"category": "Utilities",
			"info": "Integrate your workflow with your web infrastructure using JSON. Push or retrieve data to/from your other applications."
		}, {
			"thumbnail": "json/nodes/images/common/jsonio.png",
			"author": "Appup Developer",
			"icon": "json/nodes/icons/common/jsonio.png",
			"language": "en",
			"branches": "success,failure",
			"type": {
				"name": "rest-simple"
			},
			"material_icon": "call_to_action",
			"workflow_tasklet_class_name": "com.appup.workflows.core.steps.rest.RestSimpleStepExecutor",
			"help": "Integrate your workflow with your web infrastructure using JSON. Push or retrieve data to/from your other applications.",
			"ui": [{
				"name": "url",
				"label": "URL",
				"id": "url",
				"title": "Please enter a valid REST URL",
				"category": "Settings",
				"type": "text",
				"fieldType": "input",
				"required": true
			}, {
				"name": "method",
				"label": "Method type",
				"id": "method",
				"title": "Select the appropriate type for accessing the URL",
				"category": "Settings",
				"type": "text",
				"fieldType": "input",
				"required": true
			}, {
				"ui": [{
					"name": "key",
					"label": "Key",
					"id": "key",
					"title": "Enter the key",
					"category": "Parameters",
					"type": "text",
					"fieldType": "input",
					"required": false
				}, {
					"name": "value",
					"label": "Value",
					"id": "result",
					"title": "Enter the value",
					"category": "Parameters",
					"type": "text",
					"fieldType": "input",
					"required": false
				}],
				"name": "query_parameters",
				"label": "Query Parameters",
				"id": "query_parameters",
				"title": "",
				"category": "Settings",
				"type": "grid",
				"fieldType": "grid"
			}, {
				"ui": [{
					"name": "key",
					"label": "Key",
					"id": "key",
					"title": "Enter the value",
					"category": "Settings",
					"type": "text",
					"fieldType": "input",
					"required": false
				}, {
					"name": "value",
					"label": "Value",
					"id": "result",
					"title": "Enter the value",
					"category": "Settings",
					"type": "text",
					"fieldType": "input",
					"required": false
				}],
				"name": "headers",
				"label": "Headers",
				"id": "headers",
				"title": "",
				"category": "Headers",
				"type": "grid",
				"fieldType": "grid",
				"required": false
			}, {
				"ui": [{
					"name": "key",
					"label": "Key",
					"id": "key",
					"title": "Enter the key",
					"category": "Body",
					"type": "text",
					"fieldType": "input",
					"required": false
				}, {
					"name": "value",
					"label": "Value",
					"id": "result",
					"title": "Enter the value",
					"category": "Body",
					"type": "text",
					"fieldType": "input",
					"required": false
				}],
				"name": "body_parameters",
				"label": "Body Parameters",
				"id": "body_parameters",
				"title": "",
				"category": "Body",
				"type": "grid",
				"fieldType": "grid"
			}, {
				"name": "raw",
				"label": "Raw",
				"id": "raw",
				"title": "Raw Body (Note: Raw body will be applicable if it meets the following condition  (Method type !=(Get,Options) && (Body is empty && Raw is not empty)) ) ",
				"category": "Raw Body",
				"type": "textarea",
				"fieldType": "textarea",
				"required": false
			}, {
				"name": "output_variable",
				"label": "Result",
				"id": "result",
				"title": "Enter the value",
				"category": "More Settings",
				"type": "text",
				"fieldType": "input",
				"required": false
			}, {
				"options": {
					"Free Marker Template": "ftl",
					"*Handlebar": "hb"
				},
				"name": "value_type",
				"label": "Select type",
				"id": "value_type",
				"title": "Type",
				"category": "More Settings",
				"type": "select",
				"fieldType": "select",
				"required": false
			}],
			"material_icon_color": "blue",
			"displayname": "REST STEP WITH DYNAMIC METHODS",
			"material_icon_bg_color": "bg_blue",
			"name": "REST STEP WITH DYNAMIC METHODS",
			"material_icon_img": "storage",
			"company": "Appup.com",
			"id": "Rest Dynamic method step",
			"category": "Utilities",
			"info": "Integrate your workflow with your web infrastructure using JSON. Push or retrieve data to/from your other applications."
		}, {
			"thumbnail": "json/nodes/images/common/jsonio.png",
			"author": "Appup Developer",
			"icon": "json/nodes/icons/common/jsonio.png",
			"language": "en",
			"branches": "success,failure",
			"type": {
				"name": "rest-simple-v2"
			},
			"material_icon": "call_to_action",
			"workflow_tasklet_class_name": "com.appup.workflows.core.steps.restv2.RestSimpleV2StepExecutor",
			"help": "Integrate your workflow with your web infrastructure using JSON. Push or retrieve data to/from your other applications.",
			"ui": [{
				"dynamicValue": "CONFIG_NAME",
				"dynamicName": "CONFIG_NAME",
				"name": "rest_plugin",
				"label": "Rest plugin",
				"id": "rest_plugin",
				"title": "Rest plugin",
				"category": "Settings",
				"type": "select",
				"fieldType": "dynamicselect",
				"url": "/app/getPluginConfig/{{app_id}}/rest-plugin/",
				"required": true
			}, {
				"name": "url",
				"label": "URL",
				"id": "url",
				"title": "Please enter a valid REST URL",
				"category": "Settings",
				"type": "text",
				"fieldType": "input",
				"required": true
			}, {
				"options": {
					"Delete": "DELETE",
					"Post": "POST",
					"Get": "GET",
					"Put": "PUT"
				},
				"name": "method",
				"label": "Method type",
				"id": "method",
				"title": "Select the appropriate type for accessing the URL",
				"category": "Settings",
				"type": "select",
				"fieldType": "select",
				"required": false
			}, {
				"ui": [{
					"name": "key",
					"label": "Key",
					"id": "key",
					"title": "Enter the key",
					"category": "Parameters",
					"type": "text",
					"fieldType": "input",
					"required": false
				}, {
					"name": "value",
					"label": "Value",
					"id": "result",
					"title": "Enter the value",
					"category": "Parameters",
					"type": "text",
					"fieldType": "input",
					"required": false
				}],
				"name": "query_parameters",
				"label": "Query Parameters",
				"id": "query_parameters",
				"title": "",
				"category": "Settings",
				"type": "grid",
				"fieldType": "grid"
			}, {
				"ui": [{
					"name": "key",
					"label": "Key",
					"id": "key",
					"title": "Enter the value",
					"category": "Settings",
					"type": "text",
					"fieldType": "input",
					"required": false
				}, {
					"name": "value",
					"label": "Value",
					"id": "result",
					"title": "Enter the value",
					"category": "Settings",
					"type": "text",
					"fieldType": "input",
					"required": false
				}],
				"name": "headers",
				"label": "Headers",
				"id": "headers",
				"title": "",
				"category": "Headers",
				"type": "grid",
				"fieldType": "grid",
				"required": false
			}, {
				"ui": [{
					"name": "key",
					"label": "Key",
					"id": "key",
					"title": "Enter the key",
					"category": "Body",
					"type": "text",
					"fieldType": "input",
					"required": false
				}, {
					"name": "value",
					"label": "Value",
					"id": "result",
					"title": "Enter the value",
					"category": "Body",
					"type": "text",
					"fieldType": "input",
					"required": false
				}],
				"name": "body_parameters",
				"label": "Body Parameters",
				"id": "body_parameters",
				"title": "",
				"category": "Body",
				"type": "grid",
				"fieldType": "grid"
			}, {
				"name": "output_variable",
				"label": "Result",
				"id": "result",
				"title": "Enter the value",
				"category": "More Settings",
				"type": "text",
				"fieldType": "input",
				"required": false
			}, {
				"options": {
					"Free Marker Template": "ftl",
					"*Handlebar": "hb"
				},
				"name": "value_type",
				"label": "Select type",
				"id": "value_type",
				"title": "Type",
				"category": "More Settings",
				"type": "select",
				"fieldType": "select",
				"required": false
			}],
			"material_icon_color": "blue",
			"displayname": "SIMPLE REST(V2)",
			"material_icon_bg_color": "bg_blue",
			"name": "SIMPLE REST(V2)",
			"material_icon_img": "storage",
			"company": "Appup.com",
			"id": "simpleRestStep",
			"category": "Utilities",
			"info": "Integrate your workflow with your web infrastructure using JSON. Push or retrieve data to/from your other applications."
		}, {
			"thumbnail": "json/nodes/images/common/jsonio.png",
			"author": "Appup Developer",
			"icon": "json/nodes/icons/common/jsonio.png",
			"language": "en",
			"branches": "success,failure",
			"type": {
				"name": "rest-simple"
			},
			"material_icon": "call_to_action",
			"workflow_tasklet_class_name": "com.appup.workflows.core.steps.rest.RestSimpleStepExecutor",
			"help": "Integrate your workflow with your web infrastructure using JSON. Push or retrieve data to/from your other applications.",
			"ui": [{
				"name": "url",
				"label": "URL",
				"id": "url",
				"title": "Please enter a valid REST URL",
				"category": "Settings",
				"type": "text",
				"fieldType": "input",
				"required": true
			}, {
				"options": {
					"Delete": "DELETE",
					"Post": "POST",
					"Get": "GET",
					"Put": "PUT"
				},
				"name": "method",
				"label": "Method type",
				"id": "method",
				"title": "Select the appropriate type for accessing the URL",
				"category": "Settings",
				"type": "select",
				"fieldType": "select",
				"required": false
			}, {
				"ui": [{
					"name": "key",
					"label": "Key",
					"id": "key",
					"title": "Enter the key",
					"category": "Parameters",
					"type": "text",
					"fieldType": "input",
					"required": false
				}, {
					"name": "value",
					"label": "Value",
					"id": "result",
					"title": "Enter the value",
					"category": "Parameters",
					"type": "text",
					"fieldType": "input",
					"required": false
				}],
				"name": "query_parameters",
				"label": "Query Parameters",
				"id": "query_parameters",
				"title": "",
				"category": "Settings",
				"type": "grid",
				"fieldType": "grid"
			}, {
				"ui": [{
					"name": "key",
					"label": "Key",
					"id": "key",
					"title": "Enter the value",
					"category": "Settings",
					"type": "text",
					"fieldType": "input",
					"required": false
				}, {
					"name": "value",
					"label": "Value",
					"id": "result",
					"title": "Enter the value",
					"category": "Settings",
					"type": "text",
					"fieldType": "input",
					"required": false
				}],
				"name": "headers",
				"label": "Headers",
				"id": "headers",
				"title": "",
				"category": "Headers",
				"type": "grid",
				"fieldType": "grid",
				"required": false
			}, {
				"ui": [{
					"name": "key",
					"label": "Key",
					"id": "key",
					"title": "Enter the key",
					"category": "Body",
					"type": "text",
					"fieldType": "input",
					"required": false
				}, {
					"name": "value",
					"label": "Value",
					"id": "result",
					"title": "Enter the value",
					"category": "Body",
					"type": "text",
					"fieldType": "input",
					"required": false
				}],
				"name": "body_parameters",
				"label": "Body Parameters",
				"id": "body_parameters",
				"title": "",
				"category": "Body",
				"type": "grid",
				"fieldType": "grid"
			}, {
				"name": "output_variable",
				"label": "Result",
				"id": "result",
				"title": "Enter the value",
				"category": "More Settings",
				"type": "text",
				"fieldType": "input",
				"required": false
			}, {
				"options": {
					"Free Marker Template": "ftl",
					"*Handlebar": "hb"
				},
				"name": "value_type",
				"label": "Select type",
				"id": "value_type",
				"title": "Type",
				"category": "More Settings",
				"type": "select",
				"fieldType": "select",
				"required": false
			}],
			"material_icon_color": "blue",
			"displayname": "SIMPLE REST",
			"material_icon_bg_color": "bg_blue",
			"name": "SIMPLE REST",
			"material_icon_img": "storage",
			"company": "Appup.com",
			"id": "simpleRestStep",
			"category": "Utilities",
			"info": "Integrate your workflow with your web infrastructure using JSON. Push or retrieve data to/from your other applications."
		}, {
			"thumbnail": "json/nodes/images/common/jsonio.png",
			"author": "Appup Developer",
			"icon": "json/nodes/icons/common/jsonio.png",
			"language": "en",
			"branches": "success,failure",
			"type": {
				"name": "rest-v2"
			},
			"material_icon": "call_to_action",
			"workflow_tasklet_class_name": "com.appup.workflows.core.steps.restv2.RestStepV2Executor",
			"help": "Integrate your workflow with your web infrastructure using JSON. Push or retrieve data to/from your other applications.",
			"ui": [{
				"name": "url",
				"label": "URL",
				"id": "url",
				"title": "Please enter a valid REST URL",
				"category": "Settings",
				"type": "text",
				"fieldType": "input",
				"required": true
			}, {
				"name": "raw",
				"label": "Raw",
				"id": "raw",
				"title": "Raw Bod (Note: Raw body will be applicable if it meets the following condition  (Method type !=(Get,Options) && (Body is empty && Raw is not empty)) ) ",
				"category": "Raw Body",
				"type": "textarea",
				"fieldType": "textarea",
				"required": false
			}, {
				"options": {
					"Delete": "DELETE",
					"Post": "POST",
					"Get": "GET",
					"Put": "PUT"
				},
				"name": "method",
				"label": "Method type",
				"id": "method",
				"title": "Select the appropriate type for accessing the URL",
				"category": "Settings",
				"type": "select",
				"fieldType": "select",
				"required": false
			}, {
				"ui": [{
					"name": "key",
					"label": "Key",
					"id": "key",
					"title": "Enter the key",
					"category": "Parameters",
					"type": "text",
					"fieldType": "input",
					"required": false
				}, {
					"name": "value",
					"label": "Value",
					"id": "result",
					"title": "Enter the value",
					"category": "Parameters",
					"type": "text",
					"fieldType": "input",
					"required": false
				}],
				"name": "query_parameters",
				"label": "Query Parameters",
				"id": "query_parameters",
				"title": "",
				"category": "Settings",
				"type": "grid",
				"fieldType": "grid"
			}, {
				"options": {
					"None": "default",
					"Basic": "basic",
					"OAuth 1.0": "oauth1.0"
				},
				"name": "auth_type",
				"label": "Type",
				"id": "auth_type",
				"title": "Select type of authentication",
				"category": "Authentication",
				"type": "select",
				"optgroup": true,
				"fieldType": "select",
				"event": "onchange",
				"eventHandler": "showAuthentication",
				"target_type": "Authentication-tab",
				"required": true
			}, {
				"name": "username",
				"label": "User Name",
				"id": "basic_username",
				"title": "User Name for Basic Oauth Type",
				"category": "Authentication",
				"type": "text",
				"fieldType": "input",
				"required": false
			}, {
				"name": "password",
				"label": "Password",
				"id": "basic_password",
				"title": "Password for Basic Oauth",
				"category": "Authentication",
				"type": "text",
				"fieldType": "input",
				"required": false
			}, {
				"name": "consumer_key",
				"label": "Consumer Key",
				"id": "oauth1.0_consumer_key",
				"title": "Consumer Key for Oauth 1.0",
				"category": "Authentication",
				"type": "text",
				"fieldType": "input",
				"required": false
			}, {
				"name": "consumer_secret",
				"label": "Consumer Secret",
				"id": "oauth1.0_consumer_secret",
				"title": "Consumer Secret for Oauth 1.0",
				"category": "Authentication",
				"type": "text",
				"fieldType": "input",
				"required": false
			}, {
				"name": "token",
				"label": "Token",
				"id": "oauth1.0_token",
				"title": "Token for Oauth 1.0",
				"category": "Authentication",
				"type": "text",
				"fieldType": "input",
				"required": false
			}, {
				"name": "secret",
				"label": "Secret",
				"id": "oauth1.0_secret",
				"title": "Secret for Oauth 1.0",
				"category": "Authentication",
				"type": "text",
				"fieldType": "input",
				"event": "onload",
				"eventHandler": "showAuthentication",
				"target_type": "Authentication-tab",
				"required": false
			}, {
				"ui": [{
					"name": "key",
					"label": "Key",
					"id": "key",
					"title": "Enter the value",
					"category": "Settings",
					"type": "text",
					"fieldType": "input",
					"required": false
				}, {
					"name": "value",
					"label": "Value",
					"id": "result",
					"title": "Enter the value",
					"category": "Settings",
					"type": "text",
					"fieldType": "input",
					"required": false
				}],
				"name": "headers",
				"label": "Headers",
				"id": "headers",
				"title": "",
				"category": "Headers",
				"type": "grid",
				"fieldType": "grid",
				"required": false
			}, {
				"ui": [{
					"name": "key",
					"label": "Key",
					"id": "key",
					"title": "Enter the key",
					"category": "Body",
					"type": "text",
					"fieldType": "input",
					"required": false
				}, {
					"name": "value",
					"label": "Value",
					"id": "result",
					"title": "Enter the value",
					"category": "Body",
					"type": "text",
					"fieldType": "input",
					"required": false
				}],
				"name": "body_parameters",
				"label": "Body Parameters",
				"id": "body_parameters",
				"title": "",
				"category": "Body",
				"type": "grid",
				"fieldType": "grid"
			}, {
				"name": "output_variable",
				"label": "Result",
				"id": "result",
				"title": "Enter the value",
				"category": "More Settings",
				"type": "text",
				"fieldType": "input",
				"required": false
			}, {
				"options": {
					"Free Marker Template": "ftl",
					"*Handlebar": "hb"
				},
				"name": "value_type",
				"label": "Select type",
				"id": "value_type",
				"title": "Type",
				"category": "More Settings",
				"type": "select",
				"fieldType": "select",
				"required": false
			}, {
				"dynamicValue": "CONFIG_NAME",
				"dynamicName": "CONFIG_NAME",
				"name": "rest_plugin",
				"label": "Rest plugin",
				"id": "rest_plugin",
				"title": "Rest plugin",
				"category": "Settings",
				"type": "select",
				"fieldType": "dynamicselect",
				"url": "/app/getPluginConfig/{{app_id}}/rest-plugin/",
				"required": true
			}],
			"material_icon_color": "blue",
			"displayname": "REST(V2)",
			"material_icon_bg_color": "bg_blue",
			"name": "REST(V2)",
			"material_icon_img": "storage",
			"company": "Appup.com",
			"id": "restStep",
			"category": "Utilities",
			"info": "Integrate your workflow with your web infrastructure using JSON. Push or retrieve data to/from your other applications."
		}, {
			"thumbnail": "json/nodes/images/common/jsonio.png",
			"author": "Appup Developer",
			"icon": "json/nodes/icons/common/jsonio.png",
			"language": "en",
			"branches": "success,failure",
			"type": {
				"name": "rest"
			},
			"material_icon": "call_to_action",
			"workflow_tasklet_class_name": "com.appup.workflows.core.steps.rest.RestStepExecutor",
			"help": "Integrate your workflow with your web infrastructure using JSON. Push or retrieve data to/from your other applications.",
			"ui": [{
				"name": "url",
				"label": "URL",
				"id": "url",
				"title": "Please enter a valid REST URL",
				"category": "Settings",
				"type": "text",
				"fieldType": "input",
				"required": true
			}, {
				"name": "raw",
				"label": "Raw",
				"id": "raw",
				"title": "Raw Bod (Note: Raw body will be applicable if it meets the following condition  (Method type !=(Get,Options) && (Body is empty && Raw is not empty)) ) ",
				"category": "Raw Body",
				"type": "textarea",
				"fieldType": "textarea",
				"required": false
			}, {
				"options": {
					"Delete": "DELETE",
					"Post": "POST",
					"Get": "GET",
					"Put": "PUT"
				},
				"name": "method",
				"label": "Method type",
				"id": "method",
				"title": "Select the appropriate type for accessing the URL",
				"category": "Settings",
				"type": "select",
				"fieldType": "select",
				"required": false
			}, {
				"ui": [{
					"name": "key",
					"label": "Key",
					"id": "key",
					"title": "Enter the key",
					"category": "Parameters",
					"type": "text",
					"fieldType": "input",
					"required": false
				}, {
					"name": "value",
					"label": "Value",
					"id": "result",
					"title": "Enter the value",
					"category": "Parameters",
					"type": "text",
					"fieldType": "input",
					"required": false
				}],
				"name": "query_parameters",
				"label": "Query Parameters",
				"id": "query_parameters",
				"title": "",
				"category": "Settings",
				"type": "grid",
				"fieldType": "grid"
			}, {
				"options": {
					"None": "default",
					"Basic": "basic",
					"OAuth 1.0": "oauth1.0"
				},
				"name": "auth_type",
				"label": "Type",
				"id": "auth_type",
				"title": "Select type of authentication",
				"category": "Authentication",
				"type": "select",
				"optgroup": true,
				"fieldType": "select",
				"event": "onchange",
				"eventHandler": "showAuthentication",
				"target_type": "Authentication-tab",
				"required": true
			}, {
				"name": "username",
				"label": "User Name",
				"id": "basic_username",
				"title": "User Name for Basic Oauth Type",
				"category": "Authentication",
				"type": "text",
				"fieldType": "input",
				"required": false
			}, {
				"name": "password",
				"label": "Password",
				"id": "basic_password",
				"title": "Password for Basic Oauth",
				"category": "Authentication",
				"type": "text",
				"fieldType": "input",
				"required": false
			}, {
				"name": "consumer_key",
				"label": "Consumer Key",
				"id": "oauth1.0_consumer_key",
				"title": "Consumer Key for Oauth 1.0",
				"category": "Authentication",
				"type": "text",
				"fieldType": "input",
				"required": false
			}, {
				"name": "consumer_secret",
				"label": "Consumer Secret",
				"id": "oauth1.0_consumer_secret",
				"title": "Consumer Secret for Oauth 1.0",
				"category": "Authentication",
				"type": "text",
				"fieldType": "input",
				"required": false
			}, {
				"name": "token",
				"label": "Token",
				"id": "oauth1.0_token",
				"title": "Token for Oauth 1.0",
				"category": "Authentication",
				"type": "text",
				"fieldType": "input",
				"required": false
			}, {
				"name": "secret",
				"label": "Secret",
				"id": "oauth1.0_secret",
				"title": "Secret for Oauth 1.0",
				"category": "Authentication",
				"type": "text",
				"fieldType": "input",
				"event": "onload",
				"eventHandler": "showAuthentication",
				"target_type": "Authentication-tab",
				"required": false
			}, {
				"ui": [{
					"name": "key",
					"label": "Key",
					"id": "key",
					"title": "Enter the value",
					"category": "Settings",
					"type": "text",
					"fieldType": "input",
					"required": false
				}, {
					"name": "value",
					"label": "Value",
					"id": "result",
					"title": "Enter the value",
					"category": "Settings",
					"type": "text",
					"fieldType": "input",
					"required": false
				}],
				"name": "headers",
				"label": "Headers",
				"id": "headers",
				"title": "",
				"category": "Headers",
				"type": "grid",
				"fieldType": "grid",
				"required": false
			}, {
				"ui": [{
					"name": "key",
					"label": "Key",
					"id": "key",
					"title": "Enter the key",
					"category": "Body",
					"type": "text",
					"fieldType": "input",
					"required": false
				}, {
					"name": "value",
					"label": "Value",
					"id": "result",
					"title": "Enter the value",
					"category": "Body",
					"type": "text",
					"fieldType": "input",
					"required": false
				}],
				"name": "body_parameters",
				"label": "Body Parameters",
				"id": "body_parameters",
				"title": "",
				"category": "Body",
				"type": "grid",
				"fieldType": "grid"
			}, {
				"name": "output_variable",
				"label": "Result",
				"id": "result",
				"title": "Enter the value",
				"category": "More Settings",
				"type": "text",
				"fieldType": "input",
				"required": false
			}, {
				"options": {
					"Free Marker Template": "ftl",
					"*Handlebar": "hb"
				},
				"name": "value_type",
				"label": "Select type",
				"id": "value_type",
				"title": "Type",
				"category": "More Settings",
				"type": "select",
				"fieldType": "select",
				"required": false
			}],
			"material_icon_color": "blue",
			"displayname": "REST",
			"material_icon_bg_color": "bg_blue",
			"name": "REST",
			"material_icon_img": "storage",
			"company": "Appup.com",
			"id": "restStep",
			"category": "Utilities",
			"info": "Integrate your workflow with your web infrastructure using JSON. Push or retrieve data to/from your other applications."
		}, {
			"thumbnail": "json/nodes/images/DBRestAPI.png",
			"author": "Appup Developer",
			"icon": "json/nodes/icons/DBRestAPI.png",
			"language": "en",
			"branches": "success,failure",
			"type": {
				"name": "s3-file-upload-custom"
			},
			"material_icon": "cloud_upload",
			"workflow_tasklet_class_name": "com.appup.workflows.external.steps.aws.s3.S3FileUploadCustomStepExecutor",
			"help": "S3 File Upload Step",
			"ui": [{
				"name": "file_name",
				"label": "File Name",
				"id": "file_name",
				"title": "Enter the File Name",
				"category": "General",
				"type": "text",
				"fieldType": "input",
				"required": true
			}, {
				"name": "file_data",
				"label": "File Data",
				"id": "file_data",
				"title": "Enter the File Data",
				"category": "General",
				"type": "text",
				"fieldType": "input",
				"required": true
			}, {
				"name": "output_variable",
				"label": "Output Variable",
				"id": "output_variable",
				"title": "Output Variable",
				"category": "General",
				"type": "text",
				"fieldType": "input",
				"required": false
			}, {
				"name": "bucket_name",
				"label": "Bucket Name",
				"id": "bucket_name",
				"title": "Enter the Bucket Name",
				"category": "General",
				"type": "text",
				"fieldType": "input",
				"required": true
			}, {
				"name": "content_type",
				"label": "content type",
				"id": "content_type",
				"title": "Enter the content type",
				"category": "General",
				"type": "text",
				"fieldType": "input",
				"required": false
			}, {
				"options": {
					"Free Marker Template": "ftl",
					"*Handlebar": "hb"
				},
				"name": "value_type",
				"label": "Type",
				"id": "value_type",
				"title": "Enter the Type",
				"category": "General",
				"type": "select",
				"fieldType": "select",
				"required": false
			}, {
				"options": {
					"PublicReadWrite": "PublicReadWrite",
					"PublicRead": "PublicRead",
					"AuthenticatedRead": "AuthenticatedRead",
					"AwsExecRead": "AwsExecRead",
					"BucketOwnerFullControl": "BucketOwnerFullControl",
					"BucketOwnerRead": "BucketOwnerRead",
					"LogDeliveryWrite": "LogDeliveryWrite",
					"Private": "Private"
				},
				"name": "file_access",
				"label": "File Access level",
				"id": "file_access",
				"title": "Select the appropriate accessibility for given object ",
				"category": "Settings",
				"type": "select",
				"fieldType": "select",
				"required": false
			}, {
				"name": "accessKey",
				"label": "Access Key",
				"id": "accessKey",
				"title": "enter the accessKey",
				"category": "Plugin Info",
				"type": "text",
				"fieldType": "input",
				"required": true
			}, {
				"name": "secretKey",
				"label": "Secret Key",
				"id": "secretKey",
				"title": "enter the secretKey",
				"category": "Plugin Info",
				"type": "text",
				"fieldType": "input",
				"required": true
			}, {
				"name": "region",
				"label": "Region",
				"id": "region",
				"title": "enter the region",
				"category": "Plugin Info",
				"type": "text",
				"fieldType": "input",
				"required": true
			}],
			"material_icon_color": "blue",
			"displayname": "S3 File Upload Dynamic",
			"material_icon_bg_color": "bg_blue",
			"name": "S3 File Upload",
			"material_icon_img": "storage",
			"company": "Appup.com",
			"id": "s3_binary_file_upload_custom_step",
			"category": "Amazon",
			"info": "File Download Custom Step with decode"
		}, {
			"thumbnail": "json/nodes/images/DBRestAPI.png",
			"author": "Appup Developer",
			"icon": "json/nodes/icons/DBRestAPI.png",
			"language": "en",
			"branches": "success,failure",
			"type": {
				"name": "s3-binary-file-upload-base-decode"
			},
			"material_icon": "cloud_upload",
			"workflow_tasklet_class_name": "com.appup.workflows.external.steps.aws.s3.S3FileUploadDecodeStepExecutor",
			"help": "S3 File Upload Decode Step",
			"ui": [{
				"name": "file_name",
				"label": "File Name",
				"id": "file_name",
				"title": "Enter the File Name",
				"category": "General",
				"type": "text",
				"fieldType": "input",
				"required": false
			}, {
				"name": "file_data",
				"label": "File Data",
				"id": "file_data",
				"title": "Enter the File Data",
				"category": "General",
				"type": "text",
				"fieldType": "input",
				"required": false
			}, {
				"name": "output_variable",
				"label": "Output Variable",
				"id": "output_variable",
				"title": "Output Variable",
				"category": "General",
				"type": "text",
				"fieldType": "input",
				"required": false
			}, {
				"name": "bucket_name",
				"label": "Bucket Name",
				"id": "bucket_name",
				"title": "Enter the Bucket Name",
				"category": "General",
				"type": "text",
				"fieldType": "input",
				"required": true
			}, {
				"name": "content_type",
				"label": "content type",
				"id": "content_type",
				"title": "Enter the content type",
				"category": "General",
				"type": "text",
				"fieldType": "input",
				"required": true
			}, {
				"options": {
					"Free Marker Template": "ftl",
					"*Handlebar": "hb"
				},
				"name": "value_type",
				"label": "Type",
				"id": "value_type",
				"title": "Enter the Type",
				"category": "General",
				"type": "select",
				"fieldType": "select",
				"required": false
			}, {
				"name": "file_access",
				"label": "file access",
				"id": "file_access",
				"title": "enter the file access",
				"category": "General",
				"type": "text",
				"fieldType": "input",
				"required": true
			}, {
				"dynamicValue": "CONFIG_NAME",
				"dynamicName": "CONFIG_NAME",
				"name": "plugin_name",
				"label": "S3 Plugin",
				"id": "plugin_name",
				"title": "Identity",
				"category": "General",
				"type": "select",
				"fieldType": "dynamicselect",
				"url": "/app/getPluginConfig/{{app_id}}/s3-plugin/",
				"required": true
			}],
			"material_icon_color": "blue",
			"displayname": "S3 File Upload with Decode",
			"material_icon_bg_color": "bg_blue",
			"name": "S3 File Upload with Decode",
			"material_icon_img": "storage",
			"company": "Appup.com",
			"id": "s3-binary-file-upload-base-decode",
			"category": "Amazon",
			"info": "S3 File Upload with Decode"
		}, {
			"thumbnail": "json/nodes/images/DBRestAPI.png",
			"author": "Appup Developer",
			"icon": "json/nodes/icons/DBRestAPI.png",
			"language": "en",
			"branches": "success,failure",
			"type": {
				"name": "s3-binary-file-upload"
			},
			"material_icon": "cloud_upload",
			"workflow_tasklet_class_name": "com.appup.workflows.external.steps.aws.s3.S3FileUploadStepExecutor",
			"help": "S3 File Upload Step",
			"ui": [{
				"name": "file_name",
				"label": "File Name",
				"id": "file_name",
				"title": "Enter the File Name",
				"category": "General",
				"type": "text",
				"fieldType": "input",
				"required": false
			}, {
				"name": "file_data",
				"label": "File Data",
				"id": "file_data",
				"title": "Enter the File Data",
				"category": "General",
				"type": "text",
				"fieldType": "input",
				"required": false
			}, {
				"name": "output_variable",
				"label": "Output Variable",
				"id": "output_variable",
				"title": "Output Variable",
				"category": "General",
				"type": "text",
				"fieldType": "input",
				"required": false
			}, {
				"name": "bucket_name",
				"label": "Bucket Name",
				"id": "bucket_name",
				"title": "Enter the Bucket Name",
				"category": "General",
				"type": "text",
				"fieldType": "input",
				"required": true
			}, {
				"name": "content_type",
				"label": "content type",
				"id": "content_type",
				"title": "Enter the content type",
				"category": "General",
				"type": "text",
				"fieldType": "input",
				"required": true
			}, {
				"options": {
					"Free Marker Template": "ftl",
					"*Handlebar": "hb"
				},
				"name": "value_type",
				"label": "Type",
				"id": "value_type",
				"title": "Enter the Type",
				"category": "General",
				"type": "select",
				"fieldType": "select",
				"required": false
			}, {
				"name": "file_access",
				"label": "file access",
				"id": "file_access",
				"title": "enter the file access",
				"category": "General",
				"type": "text",
				"fieldType": "input",
				"required": true
			}, {
				"dynamicValue": "CONFIG_NAME",
				"dynamicName": "CONFIG_NAME",
				"name": "plugin_name",
				"label": "S3 Plugin",
				"id": "plugin_name",
				"title": "Identity",
				"category": "General",
				"type": "select",
				"fieldType": "dynamicselect",
				"url": "/app/getPluginConfig/{{app_id}}/s3-plugin/",
				"required": true
			}],
			"material_icon_color": "blue",
			"displayname": "S3 File Upload",
			"material_icon_bg_color": "bg_blue",
			"name": "S3 File Upload",
			"material_icon_img": "storage",
			"company": "Appup.com",
			"id": "s3_binary_file_upload_step",
			"category": "Amazon",
			"info": "File Upload Step"
		}, {
			"thumbnail": "json/nodes/images/Start.png",
			"author": "Appup Developer",
			"icon": "json/nodes/icons/DBUpdate.png",
			"language": "en",
			"branches": "success,failure",
			"type": {
				"name": "s3-copy"
			},
			"material_icon": "cloud_download",
			"workflow_tasklet_class_name": "com.appup.workflows.external.steps.aws.s3.S3FileCopyStepExecutor",
			"help": "S3 File Copy Step",
			"ui": [{
				"name": "bucket_name",
				"label": "Bucket Name",
				"id": "bucket_name",
				"title": "Enter the Bucket Name",
				"category": "General",
				"type": "text",
				"fieldType": "input",
				"required": true
			}, {
				"options": {
					"Free Marker Template": "ftl",
					"*Handlebar": "hb"
				},
				"name": "value_type",
				"label": "Type",
				"id": "value_type",
				"title": "Enter the Type",
				"category": "General",
				"type": "select",
				"fieldType": "select",
				"required": false
			}, {
				"name": "output_variable",
				"label": "Output Variable",
				"id": "output_variable",
				"title": "Output Variable",
				"category": "General",
				"type": "text",
				"fieldType": "input",
				"required": true
			}, {
				"name": "source_folder_path",
				"label": "Source Folder Path",
				"id": "source_folder_path",
				"title": "Source Folder Path",
				"category": "General",
				"type": "text",
				"fieldType": "input",
				"required": true
			}, {
				"name": "destination_folder_path",
				"label": "Destination Folder Path",
				"id": "destination_folder_path",
				"title": "Destination Folder Path",
				"category": "General",
				"type": "text",
				"fieldType": "input",
				"required": true
			}, {
				"dynamicValue": "CONFIG_NAME",
				"dynamicName": "CONFIG_NAME",
				"name": "plugin_name",
				"label": "S3 Plugin",
				"id": "plugin_name",
				"title": "Identity",
				"category": "General",
				"type": "select",
				"fieldType": "dynamicselect",
				"url": "/app/getPluginConfig/{{app_id}}/s3-plugin/",
				"required": true
			}],
			"material_icon_color": "blue",
			"displayname": "S3 File Delete",
			"material_icon_bg_color": "bg_blue",
			"name": "S3 File Delete",
			"material_icon_img": "storage",
			"company": "Appup.com",
			"id": "s3_file_delete_step",
			"category": "Amazon",
			"info": "File Delete Step"
		}, {
			"thumbnail": "json/nodes/images/Start.png",
			"author": "Appup Developer",
			"icon": "json/nodes/icons/DBUpdate.png",
			"language": "en",
			"branches": "success,failure",
			"type": {
				"name": "s3-file-delete-custom"
			},
			"material_icon": "cloud_download",
			"workflow_tasklet_class_name": "com.appup.workflows.external.steps.aws.s3.S3FileDeleteCustomStepExecutor",
			"help": "S3 File Delete Step",
			"ui": [{
				"name": "fileName",
				"label": "File Name",
				"id": "fileName",
				"title": "Enter the File Name",
				"category": "General",
				"type": "text",
				"fieldType": "input",
				"required": true
			}, {
				"name": "bucket_name",
				"label": "Bucket Name",
				"id": "bucket_name",
				"title": "Enter the Bucket Name",
				"category": "General",
				"type": "text",
				"fieldType": "input",
				"required": true
			}, {
				"options": {
					"Free Marker Template": "ftl",
					"*Handlebar": "hb"
				},
				"name": "value_type",
				"label": "Type",
				"id": "value_type",
				"title": "Enter the Type",
				"category": "General",
				"type": "select",
				"fieldType": "select",
				"required": false
			}, {
				"name": "output_variable",
				"label": "Output Variable",
				"id": "output_variable",
				"title": "Output Variable",
				"category": "General",
				"type": "text",
				"fieldType": "input",
				"required": true
			}, {
				"name": "accessKey",
				"label": "Access Key",
				"id": "accessKey",
				"title": "enter the accessKey",
				"category": "Plugin Info",
				"type": "text",
				"fieldType": "input",
				"required": true
			}, {
				"name": "secretKey",
				"label": "Secret Key",
				"id": "secretKey",
				"title": "enter the secretKey",
				"category": "Plugin Info",
				"type": "text",
				"fieldType": "input",
				"required": true
			}, {
				"name": "region",
				"label": "Region",
				"id": "region",
				"title": "enter the region",
				"category": "Plugin Info",
				"type": "text",
				"fieldType": "input",
				"required": true
			}],
			"material_icon_color": "blue",
			"displayname": "S3 File Delete Dynamic",
			"material_icon_bg_color": "bg_blue",
			"name": "S3 File Delete Dynamic",
			"material_icon_img": "storage",
			"company": "Appup.com",
			"id": "s3_file_delete_custom_step",
			"category": "Amazon",
			"info": "File Delete Custom Step"
		}, {
			"thumbnail": "json/nodes/images/Start.png",
			"author": "Appup Developer",
			"icon": "json/nodes/icons/DBUpdate.png",
			"language": "en",
			"branches": "success,failure",
			"type": {
				"name": "s3-file-delete"
			},
			"material_icon": "cloud_download",
			"workflow_tasklet_class_name": "com.appup.workflows.external.steps.aws.s3.S3FileDeleteStepExecutor",
			"help": "S3 File Delete Step",
			"ui": [{
				"name": "fileName",
				"label": "File Name",
				"id": "fileName",
				"title": "Enter the File Name",
				"category": "General",
				"type": "text",
				"fieldType": "input",
				"required": true
			}, {
				"name": "bucket_name",
				"label": "Bucket Name",
				"id": "bucket_name",
				"title": "Enter the Bucket Name",
				"category": "General",
				"type": "text",
				"fieldType": "input",
				"required": true
			}, {
				"options": {
					"Free Marker Template": "ftl",
					"*Handlebar": "hb"
				},
				"name": "value_type",
				"label": "Type",
				"id": "value_type",
				"title": "Enter the Type",
				"category": "General",
				"type": "select",
				"fieldType": "select",
				"required": false
			}, {
				"name": "output_variable",
				"label": "Output Variable",
				"id": "output_variable",
				"title": "Output Variable",
				"category": "General",
				"type": "text",
				"fieldType": "input",
				"required": true
			}, {
				"dynamicValue": "CONFIG_NAME",
				"dynamicName": "CONFIG_NAME",
				"name": "plugin_name",
				"label": "S3 Plugin",
				"id": "plugin_name",
				"title": "Identity",
				"category": "General",
				"type": "select",
				"fieldType": "dynamicselect",
				"url": "/app/getPluginConfig/{{app_id}}/s3-plugin/",
				"required": true
			}],
			"material_icon_color": "blue",
			"displayname": "S3 File Delete",
			"material_icon_bg_color": "bg_blue",
			"name": "S3 File Delete",
			"material_icon_img": "storage",
			"company": "Appup.com",
			"id": "s3_file_delete_step",
			"category": "Amazon",
			"info": "File Delete Step"
		}, {
			"thumbnail": "json/nodes/images/Start.png",
			"author": "Appup Developer",
			"icon": "json/nodes/icons/DBUpdate.png",
			"language": "en",
			"branches": "success,failure",
			"type": {
				"name": "s3-file-download-base-encode"
			},
			"material_icon": "cloud_download",
			"workflow_tasklet_class_name": "com.appup.workflows.external.steps.aws.s3.S3FileDownloadEncodeStepExecutor",
			"help": "S3 File Download Encode Step",
			"ui": [{
				"name": "fileName",
				"label": "File Name",
				"id": "fileName",
				"title": "Enter the File Name",
				"category": "General",
				"type": "text",
				"fieldType": "input",
				"required": false
			}, {
				"name": "output_variable",
				"label": "Output Variable",
				"id": "output_variable",
				"title": "Output Variable",
				"category": "General",
				"type": "text",
				"fieldType": "input",
				"required": false
			}, {
				"options": {
					"Free Marker Template": "ftl",
					"*Handlebar": "hb"
				},
				"name": "value_type",
				"label": "Type",
				"id": "value_type",
				"title": "Enter the Type",
				"category": "General",
				"type": "select",
				"fieldType": "select",
				"required": false
			}, {
				"name": "bucketPath",
				"label": "Bucket Path",
				"id": "bucketPath",
				"title": "Enter the Bucket Path",
				"category": "General",
				"type": "text",
				"fieldType": "input",
				"required": true
			}, {
				"dynamicValue": "CONFIG_NAME",
				"dynamicName": "CONFIG_NAME",
				"name": "plugin_name",
				"label": "S3 Plugin",
				"id": "plugin_name",
				"title": "Identity",
				"category": "General",
				"type": "select",
				"fieldType": "dynamicselect",
				"url": "/app/getPluginConfig/{{app_id}}/s3-plugin/",
				"required": true
			}],
			"material_icon_color": "blue",
			"displayname": "S3 File Download with Encode",
			"material_icon_bg_color": "bg_blue",
			"name": "S3 File Download with Encoded",
			"material_icon_img": "storage",
			"company": "Appup.com",
			"id": "s3-file-download-base-encode",
			"category": "Amazon",
			"info": "File Download Step with Encode"
		}, {
			"thumbnail": "json/nodes/images/Start.png",
			"author": "Appup Developer",
			"icon": "json/nodes/icons/DBUpdate.png",
			"language": "en",
			"branches": "success,failure",
			"type": {
				"name": "s3-file-download-custom"
			},
			"material_icon": "cloud_download",
			"workflow_tasklet_class_name": "com.appup.workflows.external.steps.aws.s3.S3FileDownloadCustomStepExecutor",
			"help": "S3 File Download Encode Step",
			"ui": [{
				"name": "fileName",
				"label": "File Name",
				"id": "fileName",
				"title": "Enter the File Name",
				"category": "General",
				"type": "text",
				"fieldType": "input",
				"required": true
			}, {
				"name": "output_variable",
				"label": "Output Variable",
				"id": "output_variable",
				"title": "Output Variable",
				"category": "General",
				"type": "text",
				"fieldType": "input",
				"required": false
			}, {
				"options": {
					"Free Marker Template": "ftl",
					"*Handlebar": "hb"
				},
				"name": "value_type",
				"label": "Type",
				"id": "value_type",
				"title": "Enter the Type",
				"category": "General",
				"type": "select",
				"fieldType": "select",
				"required": false
			}, {
				"name": "bucketPath",
				"label": "Bucket Path",
				"id": "bucketPath",
				"title": "Enter the Bucket Path",
				"category": "General",
				"type": "text",
				"fieldType": "input",
				"required": true
			}, {
				"name": "accessKey",
				"label": "Access Key",
				"id": "accessKey",
				"title": "enter the accessKey",
				"category": "Plugin Info",
				"type": "text",
				"fieldType": "input",
				"required": true
			}, {
				"name": "secretKey",
				"label": "Secret Key",
				"id": "secretKey",
				"title": "enter the secretKey",
				"category": "Plugin Info",
				"type": "text",
				"fieldType": "input",
				"required": true
			}, {
				"name": "region",
				"label": "Region",
				"id": "region",
				"title": "enter the region",
				"category": "Plugin Info",
				"type": "text",
				"fieldType": "input",
				"required": true
			}],
			"material_icon_color": "blue",
			"displayname": "S3 File Download with Encode",
			"material_icon_bg_color": "bg_blue",
			"name": "S3 File Download with Encoded",
			"material_icon_img": "storage",
			"company": "Appup.com",
			"id": "s3-file-download-custom-step",
			"category": "Amazon",
			"info": "File Download Step with Encode"
		}, {
			"thumbnail": "json/nodes/images/Start.png",
			"author": "Appup Developer",
			"icon": "json/nodes/icons/DBUpdate.png",
			"language": "en",
			"branches": "success,failure",
			"type": {
				"name": "s3-file-download"
			},
			"material_icon": "cloud_download",
			"workflow_tasklet_class_name": "com.appup.workflows.external.steps.aws.s3.S3FileDownloadStepExecutor",
			"help": "S3 File Download Step",
			"ui": [{
				"name": "fileName",
				"label": "File Name",
				"id": "fileName",
				"title": "Enter the File Name",
				"category": "General",
				"type": "text",
				"fieldType": "input",
				"required": false
			}, {
				"name": "output_variable",
				"label": "Output Variable",
				"id": "output_variable",
				"title": "Output Variable",
				"category": "General",
				"type": "text",
				"fieldType": "input",
				"required": false
			}, {
				"options": {
					"Free Marker Template": "ftl",
					"*Handlebar": "hb"
				},
				"name": "value_type",
				"label": "Type",
				"id": "value_type",
				"title": "Enter the Type",
				"category": "General",
				"type": "select",
				"fieldType": "select",
				"required": false
			}, {
				"name": "bucketPath",
				"label": "Bucket Path",
				"id": "bucketPath",
				"title": "Enter the Bucket Path",
				"category": "General",
				"type": "text",
				"fieldType": "input",
				"required": true
			}, {
				"dynamicValue": "CONFIG_NAME",
				"dynamicName": "CONFIG_NAME",
				"name": "plugin_name",
				"label": "S3 Plugin",
				"id": "plugin_name",
				"title": "Identity",
				"category": "General",
				"type": "select",
				"fieldType": "dynamicselect",
				"url": "/app/getPluginConfig/{{app_id}}/s3-plugin/",
				"required": true
			}],
			"material_icon_color": "blue",
			"displayname": "S3 File Download",
			"material_icon_bg_color": "bg_blue",
			"name": "S3 File Download",
			"material_icon_img": "storage",
			"company": "Appup.com",
			"id": "s3_file_download_step",
			"category": "Amazon",
			"info": "File Download Step"
		}, {
			"thumbnail": "json/nodes/images/Start.png",
			"author": "Appup Developer",
			"icon": "json/nodes/icons/DBUpdate.png",
			"language": "en",
			"branches": "success,failure",
			"type": {
				"name": "s3-file-list"
			},
			"material_icon": "cloud_download",
			"workflow_tasklet_class_name": "com.appup.workflows.external.steps.aws.s3.S3FileListStepExecutor",
			"help": "List of Files in S3",
			"ui": [{
				"options": {
					"Free Marker Template": "ftl",
					"*Handlebar": "hb"
				},
				"name": "value_type",
				"label": "Template",
				"id": "value_type",
				"title": "Template",
				"category": "Settings",
				"type": "text",
				"fieldType": "select",
				"required": false
			}, {
				"dynamicValue": "CONFIG_NAME",
				"dynamicName": "CONFIG_NAME",
				"name": "plugin_name",
				"label": "S3 Plugin",
				"id": "plugin_name",
				"title": "Identity",
				"category": "Settings",
				"type": "select",
				"fieldType": "dynamicselect",
				"url": "/app/getPluginConfig/{{app_id}}/s3-plugin/",
				"required": true
			}, {
				"name": "bucket_name",
				"label": "Bucket Name",
				"id": "bucket_name",
				"title": "Enter the Bucket Name",
				"category": "Settings",
				"type": "text",
				"fieldType": "input",
				"required": false
			}, {
				"name": "file_key",
				"label": "Folder Path",
				"id": "file_key",
				"title": "Enter the Folder Path",
				"category": "General",
				"type": "text",
				"fieldType": "input",
				"required": true
			}, {
				"name": "output_variable",
				"label": "Output Variable",
				"id": "output_variable",
				"title": "Enter variable name to hold output",
				"category": "Settings",
				"type": "text",
				"fieldType": "input",
				"required": false
			}],
			"material_icon_color": "blue",
			"displayname": "S3 File List",
			"material_icon_bg_color": "bg_blue",
			"name": "S3 File List",
			"material_icon_img": "storage",
			"company": "Appup.com",
			"id": "s3_file_list_step",
			"category": "Amazon",
			"info": "File List Step"
		}, {
			"thumbnail": "json/nodes/images/DBRestAPI.png",
			"author": "Appup Developer",
			"icon": "json/nodes/icons/DBRestAPI.png",
			"language": "en",
			"branches": "success,failure",
			"type": {
				"name": "s3-local-file-upload"
			},
			"material_icon": "cloud_upload",
			"workflow_tasklet_class_name": "com.appup.workflows.external.steps.aws.s3.S3LocalFileUploadExecutor",
			"help": "S3 Local File Upload Step",
			"ui": [{
				"name": "file_name",
				"label": "Local File Name",
				"id": "file_name",
				"title": "Enter the Location of your File Name",
				"category": "General",
				"type": "text",
				"fieldType": "input",
				"required": true
			}, {
				"name": "bucket_name",
				"label": "Bucket Name",
				"id": "bucket_name",
				"title": "Enter the Bucket Name",
				"category": "General",
				"type": "text",
				"fieldType": "input",
				"required": true
			}, {
				"name": "file_object_key",
				"label": "File Object Key",
				"id": "file_object_key",
				"title": "Enter the S3 File Name",
				"category": "General",
				"type": "text",
				"fieldType": "input",
				"required": true
			}, {
				"name": "content_type",
				"label": "Content type",
				"id": "content_type",
				"title": "Enter the content type",
				"category": "General",
				"type": "text",
				"fieldType": "input",
				"required": false
			}, {
				"dynamicValue": "CONFIG_NAME",
				"dynamicName": "CONFIG_NAME",
				"name": "plugin_name",
				"label": "S3 Plugin",
				"id": "plugin_name",
				"title": "Identity",
				"category": "General",
				"type": "select",
				"fieldType": "dynamicselect",
				"url": "/app/getPluginConfig/{{app_id}}/s3-plugin/",
				"required": true
			}, {
				"options": {
					"Free Marker Template": "ftl",
					"*Handlebar": "hb"
				},
				"name": "value_type",
				"label": "Type",
				"id": "value_type",
				"title": "Enter the Type",
				"category": "General",
				"type": "select",
				"fieldType": "select",
				"required": false
			}, {
				"name": "output_variable",
				"label": "Output Variable",
				"id": "output_variable",
				"title": "Output Variable",
				"category": "General",
				"type": "text",
				"fieldType": "input",
				"required": false
			}],
			"material_icon_color": "blue",
			"displayname": "S3 Local File Upload",
			"material_icon_bg_color": "bg_blue",
			"name": "S3 Local File Upload",
			"material_icon_img": "storage",
			"company": "Appup.com",
			"id": "s3-local-file-upload",
			"category": "Amazon",
			"info": "Local File Upload Step"
		}, {
			"thumbnail": "json/nodes/images/common/jsonio.png",
			"icon": "json/nodes/icons/common/jsonio.png",
			"author": "Appup Team",
			"language": "en",
			"branches": "success,failure",
			"type": {
				"name": "s3-muti-file-delete"
			},
			"material_icon": "storage",
			"workflow_tasklet_class_name": "com.appup.workflows.external.steps.aws.s3.S3MultiFileDeleteStepExecutor",
			"help": "Delete multiple file from s3",
			"ui": [{
				"options": {
					"Free Marker Template": "ftl",
					"*Handlebar": "hb"
				},
				"name": "value_type",
				"label": "Template",
				"id": "value_type",
				"title": "Template",
				"category": "General",
				"type": "text",
				"fieldType": "select",
				"required": false
			}, {
				"dynamicValue": "CONFIG_NAME",
				"dynamicName": "CONFIG_NAME",
				"name": "plugin_name",
				"label": "S3 Plugin",
				"id": "plugin_name",
				"title": "Identity",
				"category": "General",
				"type": "select",
				"fieldType": "dynamicselect",
				"url": "/app/getPluginConfig/{{app_id}}/s3-plugin/",
				"required": true
			}, {
				"name": "bucket_name",
				"label": "Bucket Name",
				"id": "bucket_name",
				"title": "Enter the Bucket Name",
				"category": "General",
				"type": "text",
				"fieldType": "input",
				"required": true
			}, {
				"name": "filelocations",
				"label": "Enter the multiple file  locations seperated by comma",
				"id": "filelocations",
				"title": "File Key.",
				"category": "General",
				"type": "text",
				"fieldType": "input",
				"required": true
			}, {
				"name": "output_variable",
				"label": "Output Variable",
				"id": "output_variable",
				"title": "Enter variable name to hold output",
				"category": "Settings",
				"type": "text",
				"fieldType": "input",
				"required": false
			}],
			"material_icon_color": "blue",
			"displayname": "S3 Multi File Delete",
			"material_icon_bg_color": "bg_blue",
			"name": "S3 Multiple File Delete",
			"material_icon_img": "storage",
			"company": "Appup.com",
			"id": "s3-muti-file-delete",
			"category": "Amazon",
			"info": "Delete multiple files from s3"
		}, {
			"thumbnail": "json/nodes/images/DMI.png",
			"author": "Appup Developer",
			"icon": "json/nodes/icons/Variables.png",
			"language": "en",
			"branches": "success,failure",
			"type": {
				"name": "s3-pre-sign-url-custom"
			},
			"material_icon": "storage",
			"workflow_tasklet_class_name": "com.appup.workflows.external.steps.aws.s3.S3PreSignURLCustomStepExecutor",
			"help": "Returns AWS S3 URL to upload file",
			"ui": [{
				"name": "file_name",
				"label": "Name",
				"id": "file-name",
				"title": "Enter file name",
				"category": "Settings",
				"type": "text",
				"fieldType": "input",
				"required": true
			}, {
				"name": "output_variable",
				"label": "Output variable",
				"id": "output-variable",
				"title": "Enter variable to store result",
				"category": "Settings",
				"type": "text",
				"fieldType": "input",
				"required": true
			}, {
				"name": "expiration_time_in_sec",
				"label": "S3 file expiration (in seconds)",
				"id": "expiration-time-in-sec",
				"title": "Enter number of seconds",
				"category": "Settings",
				"type": "number",
				"fieldType": "input",
				"required": true
			}, {
				"name": "bucket_name",
				"label": "S3 Bucket Name",
				"id": "s3-bucket-name",
				"title": "Enter bucket name",
				"category": "Settings",
				"type": "text",
				"fieldType": "input",
				"required": true
			}, {
				"options": {
					"Free Marker Template": "ftl",
					"*Handlebar": "hb"
				},
				"name": "value_type",
				"label": "Select Template",
				"id": "value",
				"title": "Template type",
				"category": "Settings",
				"type": "select",
				"fieldType": "select",
				"required": true
			}, {
				"options": {
					"DELETE": "DELETE",
					"POST": "POST",
					"GET": "GET",
					"PUT": "PUT"
				},
				"name": "method",
				"label": "Method type",
				"id": "method",
				"title": "Select the appropriate type for accessing the URL",
				"category": "Settings",
				"type": "select",
				"fieldType": "select",
				"required": false
			}, {
				"options": {
					"PublicReadWrite": "PublicReadWrite",
					"PublicRead": "PublicRead",
					"AuthenticatedRead": "AuthenticatedRead",
					"AwsExecRead": "AwsExecRead",
					"BucketOwnerFullControl": "BucketOwnerFullControl",
					"BucketOwnerRead": "BucketOwnerRead",
					"LogDeliveryWrite": "LogDeliveryWrite",
					"Private": "Private"
				},
				"name": "access_level",
				"label": "Access level",
				"id": "access_level",
				"title": "Select the appropriate accessibility for given object ",
				"category": "Settings",
				"type": "select",
				"fieldType": "select",
				"required": false
			}, {
				"name": "accessKey",
				"label": "Access Key",
				"id": "accessKey",
				"title": "enter the accessKey",
				"category": "Plugin Info",
				"type": "text",
				"fieldType": "input",
				"required": true
			}, {
				"name": "secretKey",
				"label": "Secret Key",
				"id": "secretKey",
				"title": "enter the secretKey",
				"category": "Plugin Info",
				"type": "text",
				"fieldType": "input",
				"required": true
			}, {
				"name": "region",
				"label": "Region",
				"id": "region",
				"title": "enter the region",
				"category": "Plugin Info",
				"type": "text",
				"fieldType": "input",
				"required": true
			}],
			"material_icon_color": "blue",
			"displayname": "S3 PreSign URL Dynamic",
			"material_icon_bg_color": "bg_blue",
			"name": "S3 PreSign URL Dynamic",
			"material_icon_img": "storage",
			"company": "Appup.com",
			"id": "S3 PreSign URL",
			"category": "Utilities",
			"info": "Returns AWS S3 URL to upload file"
		}, {
			"thumbnail": "json/nodes/images/DMI.png",
			"author": "Appup Developer",
			"icon": "json/nodes/icons/Variables.png",
			"language": "en",
			"branches": "success,failure",
			"type": {
				"name": "s3-pre-sign-url"
			},
			"material_icon": "storage",
			"workflow_tasklet_class_name": "com.appup.workflows.external.steps.aws.s3.S3PreSignURLStepExecutor",
			"help": "Returns AWS S3 URL to upload file",
			"ui": [{
				"name": "file_name",
				"label": "Name",
				"id": "file-name",
				"title": "Enter file name",
				"category": "Settings",
				"type": "text",
				"fieldType": "input",
				"required": true
			}, {
				"name": "output_variable",
				"label": "Output variable",
				"id": "output-variable",
				"title": "Enter variable to store result",
				"category": "Settings",
				"type": "text",
				"fieldType": "input",
				"required": true
			}, {
				"name": "expiration_time_in_sec",
				"label": "S3 file expiration (in seconds)",
				"id": "expiration-time-in-sec",
				"title": "Enter number of seconds",
				"category": "Settings",
				"type": "number",
				"fieldType": "input",
				"required": true
			}, {
				"name": "bucket_name",
				"label": "S3 Bucket Name",
				"id": "s3-bucket-name",
				"title": "Enter bucket name",
				"category": "Settings",
				"type": "text",
				"fieldType": "input",
				"required": true
			}, {
				"options": {
					"Free Marker Template": "ftl",
					"*Handlebar": "hb"
				},
				"name": "value_type",
				"label": "Select Template",
				"id": "value",
				"title": "Template type",
				"category": "Settings",
				"type": "select",
				"fieldType": "select",
				"required": true
			}, {
				"options": {
					"DELETE": "DELETE",
					"POST": "POST",
					"GET": "GET",
					"PUT": "PUT"
				},
				"name": "method",
				"label": "Method type",
				"id": "method",
				"title": "Select the appropriate type for accessing the URL",
				"category": "Settings",
				"type": "select",
				"fieldType": "select",
				"required": false
			}, {
				"options": {
					"PublicReadWrite": "PublicReadWrite",
					"PublicRead": "PublicRead",
					"AuthenticatedRead": "AuthenticatedRead",
					"AwsExecRead": "AwsExecRead",
					"BucketOwnerFullControl": "BucketOwnerFullControl",
					"BucketOwnerRead": "BucketOwnerRead",
					"LogDeliveryWrite": "LogDeliveryWrite",
					"Private": "Private"
				},
				"name": "access_level",
				"label": "Access level",
				"id": "access_level",
				"title": "Select the appropriate accessibility for given object ",
				"category": "Settings",
				"type": "select",
				"fieldType": "select",
				"required": false
			}, {
				"dynamicValue": "CONFIG_NAME",
				"dynamicName": "CONFIG_NAME",
				"name": "plugin_name",
				"label": "Plugin",
				"id": "plugin-name",
				"title": "Select plugin",
				"category": "Settings",
				"type": "select",
				"fieldType": "dynamicselect",
				"url": "/app/getPluginConfig/{{app_id}}/s3-plugin/",
				"required": true
			}],
			"material_icon_color": "blue",
			"displayname": "S3 PreSign URL",
			"material_icon_bg_color": "bg_blue",
			"name": "S3 PreSign URL",
			"material_icon_img": "storage",
			"company": "Appup.com",
			"id": "S3 PreSign URL",
			"category": "Utilities",
			"info": "Returns AWS S3 URL to upload file"
		}, {
			"thumbnail": "json/nodes/images/email/sendemail.png",
			"author": "Appup Developer",
			"icon": "json/nodes/icons/email/sendemail.png",
			"language": "en",
			"branches": "success,failure",
			"type": {
				"name": "ses-custom-step"
			},
			"material_icon": "email",
			"workflow_tasklet_class_name": "com.appup.workflows.external.steps.aws.ses.SESCustomStepExecutor",
			"help": "Send email Custom Step",
			"ui": [{
				"name": "utf_8",
				"label": "UTF_8",
				"id": "utf_8",
				"title": "UTF_8",
				"category": "General",
				"type": "text",
				"fieldType": "input",
				"required": false
			}, {
				"name": "from_name",
				"label": "From (Name)",
				"id": "from_name",
				"title": "Enter Your Name",
				"category": "Info",
				"type": "text",
				"fieldType": "input",
				"required": true
			}, {
				"name": "from_email",
				"label": "From (Email)",
				"id": "from_email",
				"title": "Enter your email address",
				"category": "Info",
				"type": "email",
				"fieldType": "input",
				"required": true
			}, {
				"name": "to_email",
				"label": "To",
				"id": "to_email",
				"title": "Enter your subscriber E-mail ID",
				"category": "Info",
				"type": "text",
				"fieldType": "input",
				"required": true
			}, {
				"name": "cc_email",
				"label": "CC",
				"id": "cc_email",
				"title": "Enter Your CC E-mail ID",
				"category": "Info",
				"type": "text",
				"fieldType": "input",
				"required": false
			}, {
				"name": "bcc_email",
				"label": "BCC",
				"id": "bcc_email",
				"title": "Enter Your BCC E-mail ID",
				"category": "Info",
				"type": "text",
				"fieldType": "input",
				"required": false
			}, {
				"name": "reply_to",
				"label": "Reply To",
				"id": "reply_to",
				"title": "Enter Your Reply To E-mail ID",
				"category": "Info",
				"type": "text",
				"fieldType": "input",
				"required": false
			}, {
				"name": "html_body",
				"label": "HTML Editor",
				"id": "html_body",
				"title": "Enter your HTML message",
				"category": "HTML",
				"type": "html",
				"fieldType": "html",
				"required": false
			}, {
				"name": "text_body",
				"label": "Text",
				"id": "text_body",
				"title": "Enter text content here",
				"category": "Text",
				"type": "textarea",
				"fieldType": "textarea",
				"required": true
			}, {
				"name": "subject",
				"label": "Subject",
				"id": "subject",
				"title": "Enter your subject for your email",
				"category": "Info",
				"type": "text",
				"fieldType": "input",
				"required": true
			}, {
				"name": "access_key",
				"label": "Access Key",
				"id": "access_key",
				"title": "Enter your Access Key",
				"category": "Plugin Info",
				"type": "text",
				"fieldType": "input",
				"required": true
			}, {
				"name": "secret_key",
				"label": "Secret Key",
				"id": "secret_key",
				"title": "Enter text content here",
				"category": "Plugin Info",
				"type": "text",
				"fieldType": "input",
				"required": true
			}, {
				"name": "region",
				"label": "Region",
				"id": "region",
				"title": "Enter your Region",
				"category": "Plugin Info",
				"type": "text",
				"fieldType": "input",
				"required": true
			}, {
				"options": {
					"Free Marker Template": "ftl",
					"*Handlebar": "hb"
				},
				"name": "value_type",
				"label": "Select type",
				"id": "value_type",
				"title": "Type",
				"category": "General",
				"type": "select",
				"fieldType": "select",
				"required": false
			}, {
				"name": "config_set",
				"label": "Config Set",
				"id": "config_set",
				"title": "Config Set",
				"category": "General",
				"type": "text",
				"fieldType": "input",
				"required": false
			}, {
				"ui": [{
					"name": "key",
					"label": "Map Data Key",
					"id": "key",
					"title": "Enter the output variable of s3 download",
					"category": "Parameters",
					"type": "text",
					"fieldType": "input",
					"required": false
				}, {
					"name": "value",
					"label": "FileName",
					"id": "result",
					"title": "Enter the filename",
					"category": "Parameters",
					"type": "text",
					"fieldType": "input",
					"required": false
				}],
				"name": "attachments",
				"label": "Attachments",
				"id": "attachments",
				"title": "",
				"category": "General",
				"type": "grid",
				"fieldType": "grid"
			}],
			"material_icon_color": "blue",
			"displayname": "Send Email Custom Node",
			"material_icon_bg_color": "bg_blue",
			"name": "Send Email Custom Node",
			"material_icon_img": "storage",
			"company": "Appup.com",
			"id": "ses-custom-step",
			"category": "Amazon",
			"info": "Send Email Custom Node"
		}, {
			"thumbnail": "json/nodes/images/email/sendemail.png",
			"author": "Appup Developer",
			"icon": "json/nodes/icons/email/sendemail.png",
			"language": "en",
			"branches": "success,failure",
			"type": {
				"name": "send-email"
			},
			"material_icon": "email",
			"workflow_tasklet_class_name": "com.appup.workflows.external.steps.aws.ses.EmailStepExecutor",
			"help": "Send Email",
			"ui": [{
				"options": {
					"*UTF-8": "UTF-8"
				},
				"name": "char_enc",
				"label": "Character Encoding",
				"id": "char_enc",
				"title": "Type",
				"category": "General",
				"type": "text",
				"fieldType": "select",
				"required": false
			}, {
				"name": "from_name",
				"label": "From (Name)",
				"id": "from_name",
				"title": "Enter Your Name",
				"category": "Info",
				"type": "text",
				"fieldType": "input",
				"required": true
			}, {
				"name": "from_email",
				"label": "From (Email)",
				"id": "from_email",
				"title": "Enter your email address",
				"category": "Info",
				"type": "email",
				"fieldType": "input",
				"required": true
			}, {
				"name": "to_email",
				"label": "To",
				"id": "to_email",
				"title": "Entries should be valid email addresses seperated by semicolon",
				"category": "Info",
				"type": "text",
				"fieldType": "input",
				"required": true
			}, {
				"name": "cc_email",
				"label": "CC",
				"id": "cc_email",
				"title": "Entries should be valid email addresses seperated by semicolon",
				"category": "Info",
				"type": "text",
				"fieldType": "input",
				"required": false
			}, {
				"name": "bcc_email",
				"label": "BCC",
				"id": "bcc_email",
				"title": "Entries should be valid email addresses seperated by semicolon",
				"category": "Info",
				"type": "text",
				"fieldType": "input",
				"required": false
			}, {
				"name": "reply_to",
				"label": "Reply To",
				"id": "reply_to",
				"title": "Enter your Reply To email Id",
				"category": "Info",
				"type": "text",
				"fieldType": "input",
				"required": false
			}, {
				"options": {
					"*Text body": "text_body",
					"Html Body": "html_body"
				},
				"name": "body_type",
				"label": "Body type",
				"id": "body_type",
				"title": "Type",
				"category": "Body",
				"type": "select",
				"fieldType": "select",
				"required": false
			}, {
				"name": "body",
				"label": "Body",
				"id": "body",
				"title": "Enter email body here",
				"category": "Body",
				"type": "textarea",
				"fieldType": "textarea",
				"cols": "50",
				"rows": "25",
				"required": false
			}, {
				"name": "subject",
				"label": "Subject",
				"id": "subject",
				"title": "Enter your subject for your email",
				"category": "Info",
				"type": "text",
				"fieldType": "input",
				"required": true
			}, {
				"options": {
					"Free Marker Template": "ftl",
					"*Handlebar": "hb"
				},
				"name": "value_type",
				"label": "Select type",
				"id": "value_type",
				"title": "Type",
				"category": "General",
				"type": "select",
				"fieldType": "select",
				"required": false
			}, {
				"name": "config_set",
				"value": "",
				"id": "config_set",
				"title": "Config Set",
				"category": "General",
				"type": "hidden",
				"fieldType": "input",
				"required": false
			}, {
				"dynamicValue": "CONFIG_NAME",
				"dynamicName": "CONFIG_NAME",
				"name": "plugin_name",
				"label": "Email Plugin",
				"id": "plugin_name",
				"title": "Identity",
				"category": "General",
				"type": "select",
				"fieldType": "dynamicselect",
				"url": "/app/getPluginConfig/{{app_id}}/email-plugin/",
				"required": true
			}],
			"material_icon_color": "blue",
			"displayname": "Send Email",
			"material_icon_bg_color": "bg_blue",
			"name": "Send Email",
			"material_icon_img": "storage",
			"company": "Appup.com",
			"id": "Send_Email_Step",
			"category": "Amazon",
			"info": "Send Email"
		}, {
			"thumbnail": "json/nodes/images/email/sendemail.png",
			"author": "Appup Developer",
			"icon": "json/nodes/icons/email/sendemail.png",
			"language": "en",
			"branches": "success,failure",
			"type": {
				"name": "send-email-with-attachment"
			},
			"material_icon": "email",
			"workflow_tasklet_class_name": "com.appup.workflows.external.steps.aws.ses.EmailWithAttachmentStepExecutor",
			"help": "Send email with attachment",
			"ui": [{
				"name": "utf_8",
				"label": "UTF_8",
				"id": "utf_8",
				"title": "UTF_8",
				"category": "General",
				"type": "text",
				"fieldType": "input",
				"required": false
			}, {
				"name": "from_name",
				"label": "From (Name)",
				"id": "from_name",
				"title": "Enter Your Name",
				"category": "Info",
				"type": "text",
				"fieldType": "input",
				"required": true
			}, {
				"name": "from_email",
				"label": "From (Email)",
				"id": "from_email",
				"title": "Enter your email address",
				"category": "Info",
				"type": "email",
				"fieldType": "input",
				"required": true
			}, {
				"name": "to_email",
				"label": "To",
				"id": "to_email",
				"title": "Enter your subscriber E-mail ID",
				"category": "Info",
				"type": "text",
				"fieldType": "input",
				"required": true
			}, {
				"name": "cc_email",
				"label": "CC",
				"id": "cc_email",
				"title": "Enter Your CC E-mail ID",
				"category": "Info",
				"type": "text",
				"fieldType": "input",
				"required": false
			}, {
				"name": "bcc_email",
				"label": "BCC",
				"id": "bcc_email",
				"title": "Enter Your BCC E-mail ID",
				"category": "Info",
				"type": "text",
				"fieldType": "input",
				"required": false
			}, {
				"name": "reply_to",
				"label": "Reply To",
				"id": "reply_to",
				"title": "Enter Your Reply To E-mail ID",
				"category": "Info",
				"type": "text",
				"fieldType": "input",
				"required": false
			}, {
				"name": "html_body",
				"label": "HTML Editor",
				"id": "html_body",
				"title": "Enter your HTML message",
				"category": "HTML",
				"type": "html",
				"fieldType": "html",
				"required": false
			}, {
				"name": "text_body",
				"label": "Text",
				"id": "text_body",
				"title": "Enter text content here",
				"category": "Text",
				"type": "textarea",
				"fieldType": "textarea",
				"required": false
			}, {
				"name": "subject",
				"label": "Subject",
				"id": "subject",
				"title": "Enter your subject for your email",
				"category": "Info",
				"type": "text",
				"fieldType": "input",
				"required": true
			}, {
				"options": {
					"Free Marker Template": "ftl",
					"*Handlebar": "hb"
				},
				"name": "value_type",
				"label": "Select type",
				"id": "value_type",
				"title": "Type",
				"category": "General",
				"type": "select",
				"fieldType": "select",
				"required": false
			}, {
				"name": "config_set",
				"label": "Config Set",
				"id": "config_set",
				"title": "Config Set",
				"category": "General",
				"type": "text",
				"fieldType": "input",
				"required": false
			}, {
				"name": "file_key",
				"label": "File key",
				"id": "file_key",
				"title": "File key",
				"category": "General",
				"type": "text",
				"fieldType": "input",
				"required": false
			}, {
				"dynamicValue": "CONFIG_NAME",
				"dynamicName": "CONFIG_NAME",
				"name": "plugin_name",
				"label": "Email Plugin",
				"id": "plugin_name",
				"title": "Identity",
				"category": "General",
				"type": "select",
				"fieldType": "dynamicselect",
				"url": "/app/getPluginConfig/{{app_id}}/email-plugin/",
				"required": false
			}],
			"material_icon_color": "blue",
			"displayname": "Send Email with Attachment",
			"material_icon_bg_color": "bg_blue",
			"name": "Send Email with Attachment",
			"material_icon_img": "storage",
			"company": "Appup.com",
			"id": "Send_Email_with_attachment_Step",
			"category": "Amazon",
			"info": "Send Email with Attachment."
		}, {
			"thumbnail": "json/nodes/images/email/sendemail.png",
			"author": "Appup Developer",
			"icon": "json/nodes/icons/email/sendemail.png",
			"language": "en",
			"branches": "success,failure",
			"type": {
				"name": "send-email-with-multiple-attachment"
			},
			"material_icon": "email",
			"workflow_tasklet_class_name": "com.appup.workflows.external.steps.aws.ses.EmailWithMultipleAttachmentStepExecutor",
			"help": "Send email with multiple attachment",
			"ui": [{
				"name": "utf_8",
				"label": "UTF_8",
				"id": "utf_8",
				"title": "UTF_8",
				"category": "General",
				"type": "text",
				"fieldType": "input",
				"required": false
			}, {
				"name": "from_name",
				"label": "From (Name)",
				"id": "from_name",
				"title": "Enter Your Name",
				"category": "Info",
				"type": "text",
				"fieldType": "input",
				"required": true
			}, {
				"name": "from_email",
				"label": "From (Email)",
				"id": "from_email",
				"title": "Enter your email address",
				"category": "Info",
				"type": "email",
				"fieldType": "input",
				"required": true
			}, {
				"name": "to_email",
				"label": "To",
				"id": "to_email",
				"title": "Enter your subscriber E-mail ID",
				"category": "Info",
				"type": "text",
				"fieldType": "input",
				"required": true
			}, {
				"name": "cc_email",
				"label": "CC",
				"id": "cc_email",
				"title": "Enter Your CC E-mail ID",
				"category": "Info",
				"type": "text",
				"fieldType": "input",
				"required": false
			}, {
				"name": "bcc_email",
				"label": "BCC",
				"id": "bcc_email",
				"title": "Enter Your BCC E-mail ID",
				"category": "Info",
				"type": "text",
				"fieldType": "input",
				"required": false
			}, {
				"name": "reply_to",
				"label": "Reply To",
				"id": "reply_to",
				"title": "Enter Your Reply To E-mail ID",
				"category": "Info",
				"type": "text",
				"fieldType": "input",
				"required": false
			}, {
				"name": "html_body",
				"label": "HTML Editor",
				"id": "html_body",
				"title": "Enter your HTML message",
				"category": "HTML",
				"type": "html",
				"fieldType": "html",
				"required": false
			}, {
				"name": "text_body",
				"label": "Text",
				"id": "text_body",
				"title": "Enter text content here",
				"category": "Text",
				"type": "textarea",
				"fieldType": "textarea",
				"required": true
			}, {
				"name": "subject",
				"label": "Subject",
				"id": "subject",
				"title": "Enter your subject for your email",
				"category": "Info",
				"type": "text",
				"fieldType": "input",
				"required": true
			}, {
				"options": {
					"Free Marker Template": "ftl",
					"*Handlebar": "hb"
				},
				"name": "value_type",
				"label": "Select type",
				"id": "value_type",
				"title": "Type",
				"category": "General",
				"type": "select",
				"fieldType": "select",
				"required": false
			}, {
				"name": "config_set",
				"label": "Config Set",
				"id": "config_set",
				"title": "Config Set",
				"category": "General",
				"type": "text",
				"fieldType": "input",
				"required": false
			}, {
				"ui": [{
					"name": "key",
					"label": "Map Data Key",
					"id": "key",
					"title": "Enter the output variable of s3 download",
					"category": "Parameters",
					"type": "text",
					"fieldType": "input",
					"required": false
				}, {
					"name": "value",
					"label": "FileName",
					"id": "result",
					"title": "Enter the filename",
					"category": "Parameters",
					"type": "text",
					"fieldType": "input",
					"required": false
				}],
				"name": "attachments",
				"label": "Attachments",
				"id": "attachments",
				"title": "",
				"category": "General",
				"type": "grid",
				"fieldType": "grid"
			}, {
				"dynamicValue": "CONFIG_NAME",
				"dynamicName": "CONFIG_NAME",
				"name": "plugin_name",
				"label": "Email Plugin",
				"id": "plugin_name",
				"title": "Identity",
				"category": "General",
				"type": "select",
				"fieldType": "dynamicselect",
				"url": "/app/getPluginConfig/{{app_id}}/email-plugin/",
				"required": false
			}],
			"material_icon_color": "blue",
			"displayname": "Send Email with Multiple Attachment",
			"material_icon_bg_color": "bg_blue",
			"name": "Send Email with Multiple Attachment",
			"material_icon_img": "storage",
			"company": "Appup.com",
			"id": "send-email-with-multiple-attachment",
			"category": "Amazon",
			"info": "Send Email with Multiple Attachment."
		}, {
			"thumbnail": "json/nodes/images/Geographic.png",
			"author": "Appup Developer",
			"icon": "json/nodes/icons/Geographic.png",
			"language": "en",
			"branches": "success,failure",
			"type": {
				"name": "send"
			},
			"material_icon": "send",
			"workflow_tasklet_class_name": "com.appup.workflows.core.steps.SendStepExecutor",
			"help": "Set the value of a specific variable",
			"ui": [{
				"name": "variable_name",
				"label": "variable name",
				"id": "variable_name",
				"title": "Enter the variable name",
				"category": "Settings",
				"type": "text",
				"fieldType": "input",
				"required": false
			}, {
				"name": "http_response_code",
				"label": "Response Code",
				"id": "http_response_code",
				"title": "Enter the http response code",
				"category": "Settings",
				"type": "text",
				"fieldType": "input",
				"required": false
			}, {
				"name": "response_content_type",
				"label": "Response content type",
				"id": "response_content_type",
				"title": "Enter the response content type",
				"category": "Settings",
				"type": "text",
				"fieldType": "input",
				"required": false
			}, {
				"options": {
					"Free Marker Template": "ftl",
					"*Handlebar": "hb"
				},
				"name": "value_type",
				"label": "Template",
				"id": "value_type",
				"title": "Template",
				"category": "Settings",
				"type": "select",
				"fieldType": "select",
				"required": false
			}],
			"material_icon_color": "blue",
			"displayname": "Send Response",
			"material_icon_bg_color": "bg_blue",
			"name": "Send Step",
			"material_icon_img": "storage",
			"company": "Appup.com",
			"id": "sendStep",
			"category": "Utilities",
			"info": "Sends the result of the HTTP request made back to the client"
		}, {
			"thumbnail": "json/nodes/images/email/sendemail.png",
			"author": "Appup Developer",
			"icon": "json/nodes/icons/email/sendemail.png",
			"language": "en",
			"branches": "success,failure",
			"type": {
				"name": "sendgrid-custom-input"
			},
			"material_icon": "email",
			"workflow_tasklet_class_name": "com.appup.workflow.external.steps.sendgrid.SendGridCustomStepExecutor",
			"help": "Custom SendGrid Email",
			"ui": [{
				"options": {
					"Free Marker Template": "ftl",
					"*Handlebar": "hb"
				},
				"name": "value_type",
				"label": "Select type",
				"id": "value_type",
				"title": "Type",
				"category": "General",
				"type": "select",
				"fieldType": "select",
				"required": false
			}, {
				"name": "from_name",
				"label": "From (Name)",
				"id": "from_name",
				"title": "Enter Your Name",
				"category": "General",
				"type": "text",
				"fieldType": "input",
				"required": true
			}, {
				"name": "from_email",
				"label": "From (Email)",
				"id": "from_email",
				"title": "Enter your email address",
				"category": "General",
				"type": "email",
				"fieldType": "input",
				"required": true
			}, {
				"name": "to_email",
				"label": "To",
				"id": "to_email",
				"title": "Entries should be valid email addresses seperated by semicolon",
				"category": "General",
				"type": "text",
				"fieldType": "input",
				"required": true
			}, {
				"name": "cc_email",
				"label": "CC",
				"id": "cc_email",
				"title": "Entries should be valid email addresses seperated by semicolon",
				"category": "General",
				"type": "text",
				"fieldType": "input",
				"required": false
			}, {
				"name": "bcc_email",
				"label": "BCC",
				"id": "bcc_email",
				"title": "Entries should be valid email addresses seperated by semicolon",
				"category": "General",
				"type": "text",
				"fieldType": "input",
				"required": false
			}, {
				"name": "reply_to",
				"label": "Reply To",
				"id": "reply_to",
				"title": "Enter Reply to email address",
				"category": "General",
				"type": "text",
				"fieldType": "input",
				"required": false
			}, {
				"name": "api_key",
				"label": "API Key:",
				"id": "api_key",
				"title": "SendGrid API Key",
				"category": "Auth Info",
				"type": "text",
				"fieldType": "input",
				"required": true
			}, {
				"name": "subject",
				"label": "Subject",
				"id": "subject",
				"title": "Enter your subject for your email",
				"category": "Body",
				"type": "text",
				"fieldType": "input",
				"required": true
			}, {
				"name": "output_variable",
				"label": "Output Variable",
				"id": "output_variable",
				"title": "Enter output variale",
				"category": "General",
				"type": "text",
				"fieldType": "input",
				"required": false
			}, {
				"options": {
					"*Text body": "text_body",
					"Html Body": "html_body"
				},
				"name": "body_type",
				"label": "Body type",
				"id": "body_type",
				"title": "Type",
				"category": "Body",
				"type": "select",
				"fieldType": "select",
				"required": false
			}, {
				"name": "body",
				"label": "Body",
				"id": "body",
				"title": "Enter email body here",
				"category": "Body",
				"type": "textarea",
				"fieldType": "textarea",
				"cols": "50",
				"rows": "25",
				"required": false
			}, {
				"ui": [{
					"name": "key",
					"label": "Key",
					"id": "key",
					"title": "Enter the key",
					"category": "Parameters",
					"type": "text",
					"fieldType": "input",
					"required": false
				}, {
					"name": "value",
					"label": "Value",
					"id": "result",
					"title": "Enter the value",
					"category": "Parameters",
					"type": "text",
					"fieldType": "input",
					"required": false
				}],
				"name": "attachments",
				"label": "Attachments",
				"id": "attachments",
				"title": "",
				"category": "General",
				"type": "grid",
				"fieldType": "grid"
			}],
			"material_icon_color": "blue",
			"displayname": "Custom Send Grid",
			"material_icon_bg_color": "bg_blue",
			"name": "Send Grid Custom Email",
			"material_icon_img": "storage",
			"company": "Appup.com",
			"id": "sendgrid-custom-input",
			"category": "Utilities",
			"info": "Send Custom Grid Email"
		}, {
			"thumbnail": "json/nodes/images/email/sendemail.png",
			"author": "Appup Developer",
			"icon": "json/nodes/icons/email/sendemail.png",
			"language": "en",
			"branches": "success,failure",
			"type": {
				"name": "sendgrid-custom-header-input"
			},
			"material_icon": "email",
			"workflow_tasklet_class_name": "com.appup.workflow.external.steps.sendgrid.SendGridCustomHeaderStepExecutor",
			"help": "Custom SendGrid Email",
			"ui": [{
				"options": {
					"Free Marker Template": "ftl",
					"*Handlebar": "hb"
				},
				"name": "value_type",
				"label": "Select type",
				"id": "value_type",
				"title": "Type",
				"category": "General",
				"type": "select",
				"fieldType": "select",
				"required": false
			}, {
				"name": "from_name",
				"label": "From (Name)",
				"id": "from_name",
				"title": "Enter Your Name",
				"category": "General",
				"type": "text",
				"fieldType": "input",
				"required": true
			}, {
				"name": "from_email",
				"label": "From (Email)",
				"id": "from_email",
				"title": "Enter your email address",
				"category": "General",
				"type": "email",
				"fieldType": "input",
				"required": true
			}, {
				"name": "to_email",
				"label": "To",
				"id": "to_email",
				"title": "Entries should be valid email addresses seperated by semicolon",
				"category": "General",
				"type": "text",
				"fieldType": "input",
				"required": true
			}, {
				"name": "cc_email",
				"label": "CC",
				"id": "cc_email",
				"title": "Entries should be valid email addresses seperated by semicolon",
				"category": "General",
				"type": "text",
				"fieldType": "input",
				"required": false
			}, {
				"name": "bcc_email",
				"label": "BCC",
				"id": "bcc_email",
				"title": "Entries should be valid email addresses seperated by semicolon",
				"category": "General",
				"type": "text",
				"fieldType": "input",
				"required": false
			}, {
				"name": "reply_to",
				"label": "Reply To",
				"id": "reply_to",
				"title": "Enter Reply to email address",
				"category": "General",
				"type": "text",
				"fieldType": "input",
				"required": false
			}, {
				"name": "api_key",
				"label": "API Key:",
				"id": "api_key",
				"title": "SendGrid API Key",
				"category": "Auth Info",
				"type": "text",
				"fieldType": "input",
				"required": true
			}, {
				"name": "subject",
				"label": "Subject",
				"id": "subject",
				"title": "Enter your subject for your email",
				"category": "Body",
				"type": "text",
				"fieldType": "input",
				"required": true
			}, {
				"name": "output_variable",
				"label": "Output Variable",
				"id": "output_variable",
				"title": "Enter output variale",
				"category": "General",
				"type": "text",
				"fieldType": "input",
				"required": false
			}, {
				"options": {
					"*Text body": "text_body",
					"Html Body": "html_body"
				},
				"name": "body_type",
				"label": "Body type",
				"id": "body_type",
				"title": "Type",
				"category": "Body",
				"type": "select",
				"fieldType": "select",
				"required": false
			}, {
				"name": "body",
				"label": "Body",
				"id": "body",
				"title": "Enter email body here",
				"category": "Body",
				"type": "textarea",
				"fieldType": "textarea",
				"cols": "50",
				"rows": "25",
				"required": false
			}, {
				"ui": [{
					"name": "key",
					"label": "Key",
					"id": "key",
					"title": "Enter the key",
					"category": "Parameters",
					"type": "text",
					"fieldType": "input",
					"required": false
				}, {
					"name": "value",
					"label": "Value",
					"id": "result",
					"title": "Enter the value",
					"category": "Parameters",
					"type": "text",
					"fieldType": "input",
					"required": false
				}],
				"name": "attachments",
				"label": "Attachments",
				"id": "attachments",
				"title": "",
				"category": "General",
				"type": "grid",
				"fieldType": "grid"
			}, {
				"ui": [{
					"name": "key",
					"label": "Key",
					"id": "key",
					"title": "Enter the header key",
					"category": "Parameters",
					"type": "text",
					"fieldType": "input",
					"required": false
				}, {
					"name": "value",
					"label": "Value",
					"id": "result",
					"title": "Enter the header value",
					"category": "Parameters",
					"type": "text",
					"fieldType": "input",
					"required": false
				}],
				"name": "headers",
				"label": "Headers",
				"id": "headers",
				"title": "",
				"category": "General",
				"type": "grid",
				"fieldType": "grid"
			}],
			"material_icon_color": "blue",
			"displayname": "Custom Header Send Grid",
			"material_icon_bg_color": "bg_blue",
			"name": "Send Grid Custom Header Email",
			"material_icon_img": "storage",
			"company": "Appup.com",
			"id": "sendgrid-custom-header-input",
			"category": "Utilities",
			"info": "Send Custom Header Grid Email"
		}, {
			"thumbnail": "json/nodes/images/email/sendemail.png",
			"author": "Appup Developer",
			"icon": "json/nodes/icons/email/sendemail.png",
			"language": "en",
			"branches": "success,failure",
			"type": {
				"name": "sendgrid-email"
			},
			"material_icon": "email",
			"workflow_tasklet_class_name": "com.appup.workflow.external.steps.sendgrid.SendGridStepExecutor",
			"help": "SendGrid Email",
			"ui": [{
				"options": {
					"Free Marker Template": "ftl",
					"*Handlebar": "hb"
				},
				"name": "value_type",
				"label": "Select type",
				"id": "value_type",
				"title": "Type",
				"category": "General",
				"type": "select",
				"fieldType": "select",
				"required": false
			}, {
				"dynamicValue": "CONFIG_NAME",
				"dynamicName": "CONFIG_NAME",
				"name": "plugin_name",
				"label": "SendGrid Plugin",
				"id": "plugin_name",
				"title": "Identity",
				"category": "General",
				"type": "select",
				"fieldType": "dynamicselect",
				"url": "/app/getPluginConfig/{{app_id}}/sendgrid-plugin/",
				"required": true
			}, {
				"name": "from_name",
				"label": "From (Name)",
				"id": "from_name",
				"title": "Enter Your Name",
				"category": "Info",
				"type": "text",
				"fieldType": "input",
				"required": true
			}, {
				"name": "from_email",
				"label": "From (Email)",
				"id": "from_email",
				"title": "Enter your email address",
				"category": "Info",
				"type": "email",
				"fieldType": "input",
				"required": true
			}, {
				"name": "to_email",
				"label": "To",
				"id": "to_email",
				"title": "Entries should be valid email addresses seperated by semicolon",
				"category": "Info",
				"type": "text",
				"fieldType": "input",
				"required": true
			}, {
				"name": "cc_email",
				"label": "CC",
				"id": "cc_email",
				"title": "Entries should be valid email addresses seperated by semicolon",
				"category": "Info",
				"type": "text",
				"fieldType": "input",
				"required": false
			}, {
				"name": "bcc_email",
				"label": "BCC",
				"id": "bcc_email",
				"title": "Entries should be valid email addresses seperated by semicolon",
				"category": "Info",
				"type": "text",
				"fieldType": "input",
				"required": false
			}, {
				"options": {
					"*Text body": "text_body",
					"Html Body": "html_body"
				},
				"name": "body_type",
				"label": "Body type",
				"id": "body_type",
				"title": "Type",
				"category": "Body",
				"type": "select",
				"fieldType": "select",
				"required": false
			}, {
				"name": "body",
				"label": "Body",
				"id": "body",
				"title": "Enter email body here",
				"category": "Body",
				"type": "textarea",
				"fieldType": "textarea",
				"cols": "50",
				"rows": "25",
				"required": false
			}, {
				"name": "subject",
				"label": "Subject",
				"id": "subject",
				"title": "Enter your subject for your email",
				"category": "Info",
				"type": "text",
				"fieldType": "input",
				"required": true
			}, {
				"name": "output_variable",
				"label": "Output Variable",
				"id": "output_variable",
				"title": "Enter output variale",
				"category": "General",
				"type": "text",
				"fieldType": "input",
				"required": false
			}],
			"material_icon_color": "blue",
			"displayname": "Send Grid",
			"material_icon_bg_color": "bg_blue",
			"name": "Send Grid Email",
			"material_icon_img": "storage",
			"company": "Appup.com",
			"id": "Send_Grid_Email_Step",
			"category": "Utilities",
			"info": "Send Grid Email"
		}, {
			"thumbnail": "json/nodes/images/email/sendemail.png",
			"author": "Appup Developer",
			"icon": "json/nodes/icons/email/sendemail.png",
			"language": "en",
			"branches": "success,failure",
			"type": {
				"name": "sendgrid-email-with-attachment"
			},
			"material_icon": "email",
			"workflow_tasklet_class_name": "com.appup.workflow.external.steps.sendgrid.SendGridwithAttachmentStepExecutor",
			"help": "SendGrid Email With Attachment",
			"ui": [{
				"options": {
					"Free Marker Template": "ftl",
					"*Handlebar": "hb"
				},
				"name": "value_type",
				"label": "Select type",
				"id": "value_type",
				"title": "Type",
				"category": "General",
				"type": "select",
				"fieldType": "select",
				"required": false
			}, {
				"dynamicValue": "CONFIG_NAME",
				"dynamicName": "CONFIG_NAME",
				"name": "plugin_name",
				"label": "SendGrid Plugin",
				"id": "plugin_name",
				"title": "Identity",
				"category": "General",
				"type": "select",
				"fieldType": "dynamicselect",
				"url": "/app/getPluginConfig/{{app_id}}/sendgrid-plugin/",
				"required": true
			}, {
				"name": "from_name",
				"label": "From (Name)",
				"id": "from_name",
				"title": "Enter Your Name",
				"category": "Info",
				"type": "text",
				"fieldType": "input",
				"required": true
			}, {
				"name": "from_email",
				"label": "From (Email)",
				"id": "from_email",
				"title": "Enter your email address",
				"category": "Info",
				"type": "email",
				"fieldType": "input",
				"required": true
			}, {
				"name": "to_email",
				"label": "To",
				"id": "to_email",
				"title": "Entries should be valid email addresses seperated by semicolon",
				"category": "Info",
				"type": "text",
				"fieldType": "input",
				"required": true
			}, {
				"name": "cc_email",
				"label": "CC",
				"id": "cc_email",
				"title": "Entries should be valid email addresses seperated by semicolon",
				"category": "Info",
				"type": "text",
				"fieldType": "input",
				"required": false
			}, {
				"name": "bcc_email",
				"label": "BCC",
				"id": "bcc_email",
				"title": "Entries should be valid email addresses seperated by semicolon",
				"category": "Info",
				"type": "text",
				"fieldType": "input",
				"required": false
			}, {
				"options": {
					"*Text body": "text_body",
					"Html Body": "html_body"
				},
				"name": "body_type",
				"label": "Body type",
				"id": "body_type",
				"title": "Type",
				"category": "Body",
				"type": "select",
				"fieldType": "select",
				"required": false
			}, {
				"name": "body",
				"label": "Body",
				"id": "body",
				"title": "Enter email body here",
				"category": "Body",
				"type": "textarea",
				"fieldType": "textarea",
				"cols": "50",
				"rows": "25",
				"required": false
			}, {
				"name": "subject",
				"label": "Subject",
				"id": "subject",
				"title": "Enter your subject for your email",
				"category": "Info",
				"type": "text",
				"fieldType": "input",
				"required": true
			}, {
				"name": "output_variable",
				"label": "Output Variable",
				"id": "output_variable",
				"title": "Enter output variale",
				"category": "General",
				"type": "text",
				"fieldType": "input",
				"required": false
			}, {
				"ui": [{
					"name": "key",
					"label": "FileName",
					"id": "key",
					"title": "Enter your file name",
					"category": "Parameters",
					"type": "text",
					"fieldType": "input",
					"required": false
				}, {
					"name": "value",
					"label": "Map Data key",
					"id": "result",
					"title": "Enter your file path",
					"category": "Parameters",
					"type": "text",
					"fieldType": "input",
					"required": false
				}],
				"name": "attachments",
				"label": "Attachments",
				"id": "attachments",
				"title": "",
				"category": "General",
				"type": "grid",
				"fieldType": "grid"
			}],
			"material_icon_color": "blue",
			"displayname": "Send Grid Email With Attachment",
			"material_icon_bg_color": "bg_blue",
			"name": "Send Grid Email With Attachment",
			"material_icon_img": "storage",
			"company": "Appup.com",
			"id": "Send_Grid_Email_With_Attachment_Step",
			"category": "Utilities",
			"info": "Send Grid Email With Attachment"
		}, {
			"thumbnail": "json/nodes/images/common/jsonio.png",
			"author": "Appup Developer",
			"icon": "json/nodes/icons/common/jsonio.png",
			"language": "en",
			"branches": "success,failure",
			"type": {
				"name": "session-get-attribute"
			},
			"material_icon": "storage",
			"workflow_tasklet_class_name": "com.appup.workflows.core.steps.session.GetSessionAttributeStepExecutor",
			"help": "Get Session Attribute",
			"ui": [{
				"options": {
					"Free Marker Template": "ftl",
					"Handlebar": "hb"
				},
				"name": "value_type",
				"label": "Value Type",
				"id": "value_type",
				"title": "Value Type",
				"category": "General",
				"type": "select",
				"fieldType": "select",
				"required": true
			}, {
				"ui": [{
					"name": "key",
					"label": "Key",
					"id": "key",
					"title": "Enter the key",
					"category": "Parameters",
					"type": "text",
					"fieldType": "input",
					"required": false
				}],
				"name": "keys",
				"label": "Keys",
				"id": "keys",
				"title": "",
				"category": "General",
				"type": "grid",
				"fieldType": "grid"
			}, {
				"name": "output_variable",
				"label": "Output Variable",
				"id": "output_variable",
				"title": "Enter the Output variable",
				"category": "General",
				"type": "text",
				"fieldType": "input",
				"required": true
			}],
			"material_icon_color": "blue",
			"displayname": "Get Session Attribute",
			"material_icon_bg_color": "bg_blue",
			"name": "Get Session Attribute",
			"material_icon_img": "storage",
			"company": "Appup.com",
			"id": "session-get-attribute",
			"category": "Developers",
			"info": "Get Session Attribute"
		}, {
			"thumbnail": "json/nodes/images/common/jsonio.png",
			"author": "Appup Developer",
			"icon": "json/nodes/icons/common/jsonio.png",
			"language": "en",
			"branches": "success,failure",
			"type": {
				"name": "session-remove-attribute"
			},
			"material_icon": "storage",
			"workflow_tasklet_class_name": "com.appup.workflows.core.steps.session.RemoveSessionAttributeStepExecutor",
			"help": "Remove Session Attribute",
			"ui": [{
				"options": {
					"Free Marker Template": "ftl",
					"Handlebar": "hb"
				},
				"name": "value_type",
				"label": "Value Type",
				"id": "value_type",
				"title": "Value Type",
				"category": "General",
				"type": "select",
				"fieldType": "select",
				"required": true
			}, {
				"ui": [{
					"name": "key",
					"label": "Key",
					"id": "key",
					"title": "Enter the key",
					"category": "Parameters",
					"type": "text",
					"fieldType": "input",
					"required": false
				}, {
					"name": "value",
					"id": "result",
					"title": "Enter the value",
					"category": "Parameters",
					"type": "text",
					"fieldType": "input",
					"required": false,
					"hidden": true
				}],
				"name": "keys",
				"label": "Keys",
				"id": "keys",
				"title": "Enter Keys",
				"category": "General",
				"type": "grid",
				"fieldType": "grid"
			}],
			"material_icon_color": "blue",
			"displayname": "Remove Session Attribute",
			"material_icon_bg_color": "bg_blue",
			"name": "Remove Session Attribute",
			"material_icon_img": "storage",
			"company": "Appup.com",
			"id": "session-remove-attribute",
			"category": "Developers",
			"info": "Remove Session Attribute"
		}, {
			"thumbnail": "json/nodes/images/common/jsonio.png",
			"author": "Appup Developer",
			"icon": "json/nodes/icons/common/jsonio.png",
			"language": "en",
			"branches": "success,failure",
			"type": {
				"name": "session-set-attribute"
			},
			"material_icon": "storage",
			"workflow_tasklet_class_name": "com.appup.workflows.core.steps.session.SetSessionAttributeStepExecutor",
			"help": "Set Session attribute",
			"ui": [{
				"options": {
					"Free Marker Template": "ftl",
					"Handlebar": "hb"
				},
				"name": "value_type",
				"label": "Value Type",
				"id": "value_type",
				"title": "Value Type",
				"category": "General",
				"type": "select",
				"fieldType": "select",
				"required": true
			}, {
				"ui": [{
					"name": "key",
					"label": "Key",
					"id": "key",
					"title": "Enter the key",
					"category": "Parameters",
					"type": "text",
					"fieldType": "input",
					"required": false
				}, {
					"name": "value",
					"label": "Value",
					"id": "result",
					"title": "Enter the value",
					"category": "Parameters",
					"type": "text",
					"fieldType": "input",
					"required": false
				}],
				"name": "attributes",
				"label": "Attributes",
				"id": "attributes",
				"title": "",
				"category": "General",
				"type": "grid",
				"fieldType": "grid"
			}, {
				"name": "value",
				"label": "Value",
				"id": "value",
				"title": "Enter the value",
				"category": "General",
				"type": "text",
				"fieldType": "input",
				"required": true
			}],
			"material_icon_color": "blue",
			"displayname": "Set Session Attribute",
			"material_icon_bg_color": "bg_blue",
			"name": "Set Session Attribute",
			"material_icon_img": "storage",
			"company": "Appup.com",
			"id": "session-set-attribute",
			"category": "Developers",
			"info": "Set Session Attribute"
		}, {
			"thumbnail": "json/nodes/images/crm/close_task.png",
			"author": "Appup Developer",
			"icon": "json/nodes/icons/crm/close_task.png",
			"language": "en",
			"branches": "success,failure",
			"type": {
				"name": "session"
			},
			"material_icon": "verified_user",
			"workflow_tasklet_class_name": "com.appup.workflows.external.steps.session.SessionStepExecutor",
			"help": "Add your session value to maintain session.",
			"ui": [{
				"name": "key",
				"label": "Name",
				"id": "key",
				"title": "name",
				"category": "Settings",
				"type": "text",
				"fieldType": "input",
				"required": true
			}, {
				"name": "value",
				"label": "Value",
				"id": "value",
				"title": "value",
				"category": "Settings",
				"type": "text",
				"fieldType": "input",
				"required": true
			}, {
				"options": {
					"Free Marker Template": "ftl",
					"*Handlebar": "hb"
				},
				"name": "value_type",
				"label": "Select Template",
				"id": "value_type",
				"title": "Template type",
				"category": "Settings",
				"type": "select",
				"fieldType": "select",
				"required": true
			}],
			"material_icon_color": "blue",
			"displayname": "Set Session",
			"material_icon_bg_color": "bg_blue",
			"name": "Session Step",
			"material_icon_img": "storage",
			"company": "Appup.com",
			"id": "SessionStep",
			"category": "Auth",
			"info": "Set the session information of the user in the central storage(Eg: DB/Redis/Memory)."
		}, {
			"thumbnail": "json/nodes/images/Verify.png",
			"author": "Appup Developer",
			"icon": "json/nodes/images/Verify.png",
			"language": "en",
			"branches": "success,failure",
			"type": {
				"name": "set-cookie"
			},
			"material_icon": "store",
			"workflow_tasklet_class_name": "com.appup.workflows.core.steps.CookieStepExecutor",
			"help": "Sets the cookie",
			"ui": [{
				"name": "name",
				"label": "Enter the name of the cookie",
				"id": "name",
				"title": "Cookie name",
				"category": "Settings",
				"type": "text",
				"fieldType": "input",
				"required": true
			}, {
				"name": "value",
				"label": "Enter the value to be set in the cookie",
				"id": "value",
				"title": "Cookie value",
				"category": "Settings",
				"type": "text",
				"fieldType": "input",
				"required": true
			}, {
				"options": {
					"Free Marker Template": "ftl",
					"*Handlebar": "hb"
				},
				"name": "value_type",
				"label": "Template type",
				"id": "value_type",
				"title": "Select the template type",
				"category": "Settings",
				"type": "select",
				"fieldType": "select",
				"required": true
			}, {
				"name": "path",
				"label": "Cookie path",
				"id": "path-url",
				"title": "Enter the path to set the cookie",
				"category": "Settings",
				"type": "text",
				"fieldType": "input",
				"required": true
			}, {
				"name": "domain",
				"label": "Cookie domain",
				"id": "domain",
				"title": "Enter the domain of the cookie",
				"category": "Settings",
				"type": "text",
				"fieldType": "input",
				"required": true
			}, {
				"name": "maxAge",
				"label": "Cookie max age",
				"id": "maxAge",
				"title": "Enter the age of the cookie",
				"category": "Settings",
				"type": "number",
				"fieldType": "input",
				"required": true
			}, {
				"name": "expires",
				"label": "Cookie expiry minutes",
				"id": "expiryDate",
				"title": "Enter the cookie expiry in minutes",
				"category": "More Options",
				"type": "number",
				"fieldType": "input",
				"required": false
			}, {
				"options": {
					"No": "false",
					"Yes": "true"
				},
				"name": "discard",
				"label": "Discard Cookie?",
				"id": "discard",
				"title": "Discard Cookie",
				"category": "More Options",
				"type": "select",
				"fieldType": "select",
				"required": false
			}, {
				"name": "secure",
				"label": "Secured cookie?",
				"id": "secure",
				"title": "Is cookie secure?",
				"category": "More Options",
				"type": "select",
				"fieldType": "select",
				"required": false,
				"options": {
					"No": "false",
					"Yes": "true"
				}
			}, {
				"name": "httpOnly",
				"label": "Is it HTTP Cookie?",
				"id": "httpOnly",
				"title": "Is it Http only cookie",
				"category": "More Options",
				"type": "text",
				"fieldType": "input",
				"required": false
			}, {
				"name": "version",
				"label": "Cookie version",
				"id": "cookie_name",
				"title": "Enter the version of the cookie",
				"category": "Settings",
				"type": "number",
				"fieldType": "input",
				"required": true
			}, {
				"name": "comment",
				"label": "Cookie comment",
				"id": "comment",
				"title": "Whats the cookie comment?",
				"category": "More Options",
				"type": "textarea",
				"fieldType": "textarea",
				"required": true
			}, {
				"name": "help",
				"label": "Set cookie in server",
				"id": "help",
				"title": "Cookie comment",
				"category": "Help",
				"type": "label",
				"fieldType": "label",
				"required": true
			}],
			"material_icon_color": "blue",
			"displayname": "Set cookie",
			"material_icon_bg_color": "bg_blue",
			"name": "Set Cookie",
			"material_icon_img": "storage",
			"company": "Appup.com",
			"id": "setCookie",
			"category": "Auth",
			"info": "Sets the cookie value"
		}, {
			"thumbnail": "json/nodes/images/common/jsonio.png",
			"author": "Appup Developer",
			"icon": "json/nodes/icons/common/jsonio.png",
			"language": "en",
			"branches": "success,failure",
			"type": {
				"name": "set-header"
			},
			"material_icon": "call_to_action",
			"workflow_tasklet_class_name": "com.appup.workflows.core.steps.SetHeaderStepExecutor",
			"help": "Set custom response headers.",
			"ui": [{
				"options": {
					"Free Marker Template": "ftl",
					"Handlebar": "hb"
				},
				"name": "value_type",
				"label": "Template",
				"id": "value_type",
				"title": "Template",
				"category": "More Settings",
				"type": "select",
				"fieldType": "select",
				"required": false
			}, {
				"ui": [{
					"name": "key",
					"label": "Key",
					"id": "key",
					"title": "Enter the key",
					"category": "Settings",
					"type": "text",
					"fieldType": "input",
					"required": false
				}, {
					"name": "value",
					"label": "Value",
					"id": "result",
					"title": "Enter the value",
					"category": "Settings",
					"type": "text",
					"fieldType": "input",
					"required": false
				}],
				"name": "headers",
				"label": "header Parameters",
				"id": "header_parameters",
				"title": "",
				"category": "Headers",
				"type": "grid",
				"fieldType": "grid"
			}],
			"material_icon_color": "blue",
			"displayname": "Set Header",
			"material_icon_bg_color": "bg_blue",
			"name": "Set Header",
			"material_icon_img": "storage",
			"company": "Appup.com",
			"id": "set-header",
			"category": "Utilities",
			"info": "Set custom response headers."
		}, {
			"thumbnail": "json/nodes/images/Variables.png",
			"author": "Appup Developer",
			"icon": "json/nodes/icons/common/SetProperty.png",
			"language": "en",
			"branches": "success,failure",
			"type": {
				"name": "set-var-multi"
			},
			"material_icon": "settings",
			"workflow_tasklet_class_name": "com.appup.workflows.core.steps.SetVarMapStepExecutor",
			"help": "Step Var Multiple Help",
			"ui": [{
				"name": "json_is",
				"label": "Is JSON?",
				"id": "is-json",
				"title": "Select whether variables group in json or not",
				"category": "Settings",
				"type": "select",
				"fieldType": "select",
				"options": {
					"true": "true",
					"false": "false"
				},
				"required": false
			}, {
				"name": "json_name",
				"label": "Name",
				"id": "json-name",
				"title": "Enter name of the JSON",
				"category": "Settings",
				"type": "text",
				"fieldType": "input",
				"required": true
			}, {
				"name": "variables",
				"label": "Variables",
				"id": "variables",
				"title": "",
				"category": "Settings",
				"type": "grid",
				"ui": [{
					"label": "Key",
					"name": "key",
					"required": "required",
					"title": "Please enter keyname",
					"fieldType": "input",
					"type": "text"
				}, {
					"label": "Value",
					"name": "value",
					"required": "required",
					"title": "Please enter value",
					"fieldType": "input",
					"type": "text"
				}],
				"fieldType": "grid",
				"required": true
			}, {
				"options": {
					"Free Marker Template": "ftl",
					"*Handlebar": "hb"
				},
				"name": "value_type",
				"label": "Select Template",
				"id": "value",
				"title": "Template type",
				"category": "Settings",
				"type": "select",
				"fieldType": "select",
				"required": true
			}, {
				"options": {
					"": "DO_NOTHING",
					"Decode": "DECODE",
					"Encode": "ENCODE"
				},
				"name": "encode_or_decode",
				"label": "Encode or Decode to/from Base64?",
				"id": "encodeDecode",
				"title": "Encode or Decode to/from Base64?",
				"category": "Settings",
				"type": "select",
				"fieldType": "select",
				"required": true
			}, {
				"options": {
					"ISO-8859-1": "ISO-8859-1",
					"UTF-8 (Recommended)": "UTF-8",
					"UTF-16LE": "UTF-16LE",
					"UTF-16": "UTF-16",
					"UTF-16BE": "UTF-16BE",
					"US-ASCII": "US-ASCII"
				},
				"name": "char_set",
				"label": "Charset to use",
				"id": "charset",
				"title": "Charset to use",
				"category": "Settings",
				"type": "select",
				"fieldType": "select",
				"required": true
			}],
			"material_icon_color": "blue",
			"displayname": "Set multi var",
			"material_icon_bg_color": "bg_blue",
			"name": "Set Var Multi",
			"material_icon_img": "storage",
			"company": "Appup.com",
			"id": "set-var-multi",
			"category": "Utilities",
			"info": "Sets values to multiple variables."
		}, {
			"thumbnail": "json/nodes/images/common/SetProperty.png",
			"author": "Appup Developer",
			"icon": "json/nodes/icons/common/SetProperty.png",
			"language": "en",
			"branches": "success,failure",
			"type": {
				"name": "set-var"
			},
			"material_icon": "settings",
			"workflow_tasklet_class_name": "com.appup.workflows.core.steps.SetVarStepExecutor",
			"help": "Step Help",
			"ui": [{
				"name": "name",
				"label": "Enter Name of the Variable",
				"id": "var_name",
				"title": "Variable Name",
				"category": "Settings",
				"type": "text",
				"fieldType": "input",
				"required": true
			}, {
				"name": "value",
				"label": "Value",
				"id": "value",
				"title": "Enter Value",
				"category": "Settings",
				"type": "text",
				"fieldType": "input",
				"required": true
			}, {
				"name": "help",
				"label": "Set the value of a specific variable",
				"id": "help",
				"title": "Help",
				"category": "help",
				"type": "label",
				"fieldType": "label",
				"required": true
			}, {
				"options": {
					"Free Marker Template": "ftl",
					"*Handlebar": "hb"
				},
				"name": "value_type",
				"label": "Select Template",
				"id": "value",
				"title": "Template type",
				"category": "Settings",
				"type": "select",
				"fieldType": "select",
				"required": true
			}, {
				"options": {
					"": "DO_NOTHING",
					"Decode": "DECODE",
					"Encode": "ENCODE",
					"Decode As Bytes": "DECODE_BYTES"
				},
				"name": "encode_or_decode",
				"label": "Encode or Decode to/from Base64?",
				"id": "encodeDecode",
				"title": "Encode or Decode to/from Base64?",
				"category": "Settings",
				"type": "select",
				"fieldType": "select",
				"required": false
			}, {
				"options": {
					"ISO-8859-1": "ISO-8859-1",
					"UTF-8 (Recommended)": "UTF-8",
					"UTF-16LE": "UTF-16LE",
					"UTF-16": "UTF-16",
					"UTF-16BE": "UTF-16BE",
					"US-ASCII": "US-ASCII"
				},
				"name": "char_set",
				"label": "Charset to use",
				"id": "charset",
				"title": "Charset to use",
				"category": "Settings",
				"type": "select",
				"fieldType": "select",
				"required": false
			}],
			"material_icon_color": "blue",
			"displayname": "Set var",
			"material_icon_bg_color": "bg_blue",
			"name": "Set Var",
			"material_icon_img": "storage",
			"company": "Appup.com",
			"id": "set-var",
			"category": "Utilities",
			"info": "Sets a value to a single variable."
		}, {
			"thumbnail": "json/nodes/images/DBRestAPI.png",
			"author": "Appup Developer",
			"icon": "json/nodes/icons/DBRestAPI.png",
			"language": "en",
			"branches": "success,failure",
			"type": {
				"name": "shell-command"
			},
			"material_icon": "cloud_download",
			"workflow_tasklet_class_name": "com.appup.workflows.external.steps.ShellCommandStepExecutor",
			"help": "Shell Command Step",
			"ui": [{
				"name": "command",
				"label": "Shell Command",
				"id": "command",
				"title": "Enter the Shell Command",
				"category": "General",
				"type": "text",
				"fieldType": "input",
				"required": true
			}, {
				"options": {
					"Free Marker Template": "ftl",
					"*Handlebar": "hb"
				},
				"name": "value_type",
				"label": "Type",
				"id": "value_type",
				"title": "Enter the Type",
				"category": "General",
				"type": "select",
				"fieldType": "select",
				"required": false
			}, {
				"name": "output_variable",
				"label": "Output Variable",
				"id": "output_variable",
				"title": "Output Variable",
				"category": "General",
				"type": "text",
				"fieldType": "input",
				"required": true
			}],
			"material_icon_color": "blue",
			"displayname": "Shell Command Execute",
			"material_icon_bg_color": "bg_blue",
			"name": "Shell Command Execute",
			"material_icon_img": "storage",
			"company": "Appup.com",
			"id": "shell-command_step",
			"category": "Utilities",
			"info": "Shell Command Step"
		}, {
			"thumbnail": "json/nodes/images/Announcement.png",
			"author": "Appup Developer",
			"icon": "json/nodes/icons/Announcement.png",
			"language": "en",
			"branches": "success,failure",
			"type": {
				"name": "sns-dynamic"
			},
			"material_icon": "event",
			"workflow_tasklet_class_name": "com.appup.workflows.external.steps.aws.sns.SNSDynamicStepExecutor",
			"help": "SNS dynamic Event Step",
			"ui": [{
				"name": "access_key",
				"label": "Access Key",
				"id": "access_key",
				"title": "Enter your Access Key.",
				"category": "Settings",
				"type": "text",
				"fieldType": "input",
				"required": true
			}, {
				"name": "secret_key",
				"label": "Secret Key",
				"id": "secret_key",
				"title": "Enter your Secret Key.",
				"category": "Settings",
				"type": "text",
				"fieldType": "input",
				"required": true
			}, {
				"options": {
					"US East (Ohio)": "us-east-2",
					"*US East (N. Virginia)": "us-east-1",
					"US West (N. California)": "us-west-1",
					"US West (Oregon)": "us-west-2",
					"Asia Pacific (Tokyo)": "ap-northeast-1",
					"Asia Pacific (Seoul)": "ap-northeast-2",
					"Asia Pacific (Osaka-Local)": "ap-northeast-3",
					"Asia Pacific (Mumbai)": "ap-south-1",
					"Asia Pacific (Singapore)": "ap-southeast-1",
					"Canada (Central)": "ca-central-1",
					"China (Beijing)": "cn-north-1",
					"China (Ningxia)": "cn-northwest-1",
					"EU (Frankfurt)": "eu-central-1",
					"EU (Ireland)": "eu-west-1",
					"EU (London)": "eu-west-2",
					"EU (Paris)": "eu-west-3",
					"South America (Su00E3o Paulo)": "sa-east-1"
				},
				"id": "region",
				"type": "select",
				"name": "region",
				"label": "Region",
				"title": "Region",
				"category": "Settings",
				"fieldType": "select",
				"required": true
			}, {
				"name": "topic",
				"label": "Topic",
				"id": "topic",
				"title": "Enter your topic.",
				"category": "Settings",
				"type": "text",
				"fieldType": "input",
				"required": true
			}, {
				"name": "value",
				"label": "Value",
				"id": "value",
				"title": "Enter your value",
				"category": "Settings",
				"type": "text",
				"fieldType": "input",
				"required": true
			}, {
				"name": "output_variable",
				"label": "Output Variable:",
				"id": "output_variable",
				"title": "Enter your output variable name.",
				"category": "Settings",
				"type": "text",
				"fieldType": "input",
				"required": false
			}, {
				"name": "help",
				"label": "Write your own function here.",
				"id": "help",
				"title": "Enter your label",
				"category": "help",
				"type": "text",
				"fieldType": "input",
				"required": false
			}],
			"material_icon_color": "blue",
			"displayname": "SNS Dynamic Event step",
			"material_icon_bg_color": "bg_blue",
			"name": "SNS Dynamic Event step",
			"material_icon_img": "storage",
			"company": "Appup.com",
			"id": "sns-dynamic",
			"category": "Utilities",
			"info": "SNS Dynamic Event step."
		}, {
			"thumbnail": "json/nodes/images/DBSelecte.png",
			"author": "Appup Developer",
			"icon": "json/nodes/icons/DBSelecte.png",
			"language": "en",
			"branches": "success,failure",
			"type": {
				"name": "sns-request-answer"
			},
			"material_icon": "storage",
			"workflow_tasklet_class_name": "com.appup.workflows.external.steps.aws.sns.SNSRequestAnswerStepExecutor",
			"help": "SNS Request Answer Step",
			"ui": [],
			"material_icon_color": "blue",
			"displayname": "SNS request answer",
			"material_icon_bg_color": "bg_blue",
			"name": "SNS Request Answer Step",
			"material_icon_img": "storage",
			"company": "Appup.com",
			"id": "sns_request_answer_step",
			"category": "Amazon",
			"info": "Respond to the validation request sent by the SNS servce when the subscriber is of type HTTP"
		}, {
			"thumbnail": "json/nodes/images/new/sql-delete-node.png",
			"author": "Appup Developer",
			"icon": "json/nodes/icons/new/sql-delete.png",
			"language": "en",
			"branches": "success,failure",
			"type": {
				"name": "sql-delete"
			},
			"material_icon": "storage",
			"workflow_tasklet_class_name": "com.appup.workflows.core.steps.sql.SQLDeleteStepExecutor",
			"help": "Execute SQL delete Query",
			"ui": [{
				"name": "plugin_name",
				"label": "Database",
				"id": "plugin_name",
				"title": "Please Provide Plugin Config Name",
				"category": "General",
				"type": "text",
				"fieldType": "input",
				"required": true
			}, {
				"name": "value",
				"label": "Query",
				"id": "value",
				"title": "Query",
				"category": "General",
				"type": "text",
				"fieldType": "textarea",
				"required": true
			}, {
				"options": {
					"Free Marker Template": "ftl",
					"*Handlebar": "hb"
				},
				"name": "value_type",
				"label": "Template",
				"id": "value_type",
				"title": "Template",
				"category": "General",
				"type": "text",
				"fieldType": "select",
				"required": false
			}, {
				"name": "output_variable",
				"label": "Set Result",
				"id": "output_variable",
				"title": "Set Result",
				"category": "General",
				"type": "text",
				"fieldType": "input",
				"required": false
			}],
			"material_icon_color": "blue",
			"displayname": "SQL Delete",
			"material_icon_bg_color": "bg_blue",
			"name": "SQL Delete Step(Custom Plugin)",
			"material_icon_img": "storage",
			"company": "Appup.com",
			"id": "sql_del_step",
			"category": "Database",
			"info": "Used to delete data stored in table."
		}, {
			"thumbnail": "json/nodes/images/new/sql-delete-node.png",
			"author": "Appup Developer",
			"icon": "json/nodes/icons/new/sql-delete.png",
			"language": "en",
			"branches": "success,failure",
			"type": {
				"name": "sql-delete"
			},
			"material_icon": "storage",
			"workflow_tasklet_class_name": "com.appup.workflows.core.steps.sql.SQLDeleteStepExecutor",
			"help": "Execute SQL delete Query",
			"ui": [{
				"dynamicValue": "CONFIG_NAME",
				"dynamicName": "CONFIG_NAME",
				"name": "plugin_name",
				"label": "Database",
				"id": "plugin_name",
				"title": "Database",
				"category": "General",
				"type": "select",
				"fieldType": "dynamicselect",
				"url": "/app/get-by-category/{{app_id}}/mysql-database/",
				"required": true
			}, {
				"name": "value",
				"label": "Query",
				"id": "value",
				"title": "Query",
				"category": "General",
				"type": "text",
				"fieldType": "textarea",
				"required": true
			}, {
				"options": {
					"Free Marker Template": "ftl",
					"*Handlebar": "hb"
				},
				"name": "value_type",
				"label": "Template",
				"id": "value_type",
				"title": "Template",
				"category": "General",
				"type": "text",
				"fieldType": "select",
				"required": false
			}, {
				"name": "output_variable",
				"label": "Set Result",
				"id": "output_variable",
				"title": "Set Result",
				"category": "General",
				"type": "text",
				"fieldType": "input",
				"required": false
			}],
			"material_icon_color": "blue",
			"displayname": "SQL Delete",
			"material_icon_bg_color": "bg_blue",
			"name": "SQL Delete Step",
			"material_icon_img": "storage",
			"company": "Appup.com",
			"id": "sql_del_step",
			"category": "Database",
			"info": "Used to delete data stored in table."
		}, {
			"thumbnail": "json/nodes/images/new/sql-insert-node.png",
			"author": "Appup Developer",
			"icon": "json/nodes/icons/new/sql-insert.png",
			"language": "en",
			"branches": "success,failure",
			"type": {
				"name": "sql-dynamic"
			},
			"material_icon": "storage",
			"workflow_tasklet_class_name": "com.appup.workflows.core.steps.sql.SQLDynamicStepExecutor",
			"help": "Execute SQL Query with provided server information.",
			"material_icon_color": "blue",
			"displayname": "SQL Query with Custom Connection",
			"material_icon_bg_color": "bg_blue",
			"name": "SQL Query with Custom Connection",
			"material_icon_img": "storage",
			"company": "Appup.com",
			"id": "sql_dynamic_step",
			"category": "Database",
			"info": "Update database table records",
			"ui": [{
				"id": "mysql_server",
				"type": "text",
				"name": "server",
				"label": "Server",
				"title": "Enter the server address",
				"category": "General",
				"fieldType": "input",
				"required": true
			}, {
				"id": "username",
				"type": "text",
				"name": "username",
				"label": "UserName",
				"title": "Enter the Username",
				"category": "General",
				"fieldType": "input",
				"required": true
			}, {
				"id": "password",
				"type": "password",
				"name": "password",
				"label": "Password",
				"title": "Enter the Password",
				"category": "General",
				"fieldType": "input",
				"required": true
			}, {
				"id": "schema",
				"type": "text",
				"name": "schema",
				"label": "Schema",
				"title": "Enter the Schema Name",
				"category": "General",
				"fieldType": "input",
				"required": true
			}, {
				"name": "output_variable",
				"label": "Output Variable",
				"id": "output_variable",
				"title": "Output Variable",
				"category": "General",
				"type": "text",
				"fieldType": "input",
				"required": false
			}, {
				"options": {
					"Free Marker Template": "ftl",
					"*Handlebar": "hb"
				},
				"name": "value_type",
				"label": "Type",
				"id": "value_type",
				"title": "Enter the Type",
				"category": "General",
				"type": "select",
				"fieldType": "select",
				"required": false
			}, {
				"name": "query",
				"label": "Query",
				"id": "Query",
				"title": "Enter the Query",
				"category": "General",
				"type": "text",
				"fieldType": "textarea",
				"required": true,
				"cols": 80,
				"rows": 5
			}]
		}, {
			"thumbnail": "json/nodes/images/new/sql-export-node.png",
			"author": "Appup Developer",
			"icon": "json/nodes/icons/new/sql-export.png",
			"language": "en",
			"branches": "success,failure",
			"type": {
				"name": "sql-export"
			},
			"material_icon": "storage",
			"workflow_tasklet_class_name": "com.appup.workflows.core.steps.sql.SQLExportStepExecutor",
			"help": "SQL Export",
			"ui": [{
				"dynamicValue": "CONFIG_NAME",
				"dynamicName": "CONFIG_NAME",
				"name": "plugin_name",
				"label": "Database",
				"id": "plugin_name",
				"title": "Database",
				"category": "General",
				"type": "select",
				"fieldType": "dynamicselect",
				"url": "/app/get-by-category/{{app_id}}/mysql-database/",
				"required": true
			}, {
				"name": "value",
				"label": "Value",
				"id": "value",
				"title": "Value",
				"category": "General",
				"type": "text",
				"fieldType": "input",
				"required": true
			}, {
				"options": {
					"Free Marker Template": "ftl",
					"*Handlebar": "hb"
				},
				"name": "value_type",
				"label": "Type",
				"id": "value_type",
				"title": "Type",
				"category": "General",
				"type": "select",
				"fieldType": "input",
				"required": false
			}],
			"material_icon_color": "blue",
			"displayname": "SQL Export",
			"material_icon_bg_color": "bg_blue",
			"name": "SQL Export",
			"material_icon_img": "storage",
			"company": "Appup.com",
			"id": "SQL_Export",
			"category": "Database",
			"info": "SQL Export"
		}, {
			"thumbnail": "json/nodes/images/new/sql-import-node.png",
			"author": "Appup Developer",
			"icon": "json/nodes/icons/new/sql-import.png",
			"language": "en",
			"branches": "success,failure",
			"type": {
				"name": "sql-import"
			},
			"material_icon": "storage",
			"workflow_tasklet_class_name": "com.appup.workflows.core.steps.sql.SQLImportStepExecutor",
			"help": "Sql Import",
			"ui": [{
				"dynamicValue": "CONFIG_NAME",
				"dynamicName": "CONFIG_NAME",
				"name": "plugin_name",
				"label": "Database",
				"id": "plugin_name",
				"title": "Database",
				"category": "General",
				"type": "select",
				"fieldType": "dynamicselect",
				"url": "/app/get-by-category/{{app_id}}/mysql-database/",
				"required": true
			}, {
				"name": "file_url",
				"label": "File URL",
				"id": "file_url",
				"title": "File URL",
				"category": "General",
				"type": "text",
				"fieldType": "input",
				"required": true
			}, {
				"name": "header_mappings",
				"label": "Header Mappings",
				"id": "header_mappings",
				"title": "Header Mappings",
				"category": "General",
				"type": "text",
				"fieldType": "input",
				"required": true
			}, {
				"name": "table",
				"label": "Table",
				"id": "table",
				"title": "Table",
				"category": "General",
				"type": "text",
				"fieldType": "input",
				"required": true
			}, {
				"name": "count",
				"label": "Count",
				"id": "count",
				"title": "Count",
				"category": "General",
				"type": "text",
				"fieldType": "input",
				"required": false
			}, {
				"name": "output_variable",
				"label": "Output Variable",
				"id": "output_variable",
				"title": "Output Variable",
				"category": "General",
				"type": "text",
				"fieldType": "input",
				"required": false
			}],
			"material_icon_color": "blue",
			"displayname": "SQL Import",
			"material_icon_bg_color": "bg_blue",
			"name": "SQL Import",
			"material_icon_img": "storage",
			"company": "Appup.com",
			"id": "SQL_Import",
			"category": "Database",
			"info": "SQL Import"
		}, {
			"thumbnail": "json/nodes/images/new/sql-insert-node.png",
			"author": "Appup Developer",
			"icon": "json/nodes/icons/new/sql-insert.png",
			"language": "en",
			"branches": "success,failure",
			"type": {
				"name": "sql-insert"
			},
			"material_icon": "storage",
			"workflow_tasklet_class_name": "com.appup.workflows.core.steps.sql.SQLInsertStepExecutor",
			"help": "Execute SQL Insert Query",
			"ui": [{
				"name": "plugin_name",
				"label": "Database",
				"id": "plugin_name",
				"title": "Please Provide Plugin Config Name",
				"category": "General",
				"type": "text",
				"fieldType": "input",
				"required": true
			}, {
				"name": "value",
				"label": "Query",
				"id": "value",
				"title": "Query",
				"category": "General",
				"type": "text",
				"fieldType": "textarea",
				"required": true
			}, {
				"options": {
					"Free Marker Template": "ftl",
					"*Handlebar": "hb"
				},
				"name": "value_type",
				"label": "Template",
				"id": "value_type",
				"title": "Template",
				"category": "General",
				"type": "text",
				"fieldType": "select",
				"required": false
			}, {
				"name": "output_variable",
				"label": "Set Result",
				"id": "output_variable",
				"title": "Set Result",
				"category": "General",
				"type": "text",
				"fieldType": "input",
				"required": false
			}],
			"material_icon_color": "blue",
			"displayname": "SQL Insert",
			"material_icon_bg_color": "bg_blue",
			"name": "SQL Insert(Custom Plugin)",
			"material_icon_img": "storage",
			"company": "Appup.com",
			"id": "insertStep",
			"category": "Database",
			"info": "SQL Insert Step"
		}, {
			"thumbnail": "json/nodes/images/new/sql-insert-node.png",
			"author": "Appup Developer",
			"icon": "json/nodes/icons/new/sql-insert.png",
			"language": "en",
			"branches": "success,failure",
			"type": {
				"name": "sql-insert"
			},
			"material_icon": "storage",
			"workflow_tasklet_class_name": "com.appup.workflows.core.steps.sql.SQLInsertStepExecutor",
			"help": "Execute SQL Insert Query",
			"ui": [{
				"dynamicValue": "CONFIG_NAME",
				"dynamicName": "CONFIG_NAME",
				"name": "plugin_name",
				"label": "Database",
				"id": "plugin_name",
				"title": "Database",
				"category": "General",
				"type": "select",
				"fieldType": "dynamicselect",
				"url": "/app/get-by-category/{{app_id}}/mysql-database/",
				"required": true
			}, {
				"name": "value",
				"label": "Query",
				"id": "value",
				"title": "Query",
				"category": "General",
				"type": "text",
				"fieldType": "textarea",
				"required": true
			}, {
				"options": {
					"Free Marker Template": "ftl",
					"*Handlebar": "hb"
				},
				"name": "value_type",
				"label": "Template",
				"id": "value_type",
				"title": "Template",
				"category": "General",
				"type": "text",
				"fieldType": "select",
				"required": false
			}, {
				"name": "output_variable",
				"label": "Set Result",
				"id": "output_variable",
				"title": "Set Result",
				"category": "General",
				"type": "text",
				"fieldType": "input",
				"required": false
			}],
			"material_icon_color": "blue",
			"displayname": "SQL Insert",
			"material_icon_bg_color": "bg_blue",
			"name": "SQL Insert",
			"material_icon_img": "storage",
			"company": "Appup.com",
			"id": "insertStep",
			"category": "Database",
			"info": "SQL Insert Step"
		}, {
			"thumbnail": "json/nodes/images/new/invoke-stored-procedures-node.png",
			"author": "Appup Developer",
			"icon": "json/nodes/icons/new/invoke-stored-procedures.png",
			"language": "en",
			"branches": "success,failure",
			"type": {
				"name": "sql-invoke-stored-procedure"
			},
			"material_icon": "storage",
			"workflow_tasklet_class_name": "com.appup.workflows.core.steps.sql.SQLInvokeStoredProcedureStepExecutor",
			"help": "Invoke stored procedure",
			"ui": [{
				"dynamicValue": "CONFIG_NAME",
				"dynamicName": "CONFIG_NAME",
				"name": "plugin_name",
				"label": "DB Plugin",
				"id": "plugin_name",
				"title": "Select plugin",
				"category": "Settings",
				"type": "select",
				"fieldType": "dynamicselect",
				"url": "/app/get-by-category/{{app_id}}/mysql-database/",
				"required": true
			}, {
				"name": "value",
				"label": "Call stored procedure query",
				"id": "value",
				"title": "Call stored procedure query",
				"category": "Settings",
				"type": "text",
				"fieldType": "input",
				"required": false
			}, {
				"options": {
					"Free Marker Template": "ftl",
					"*Handlebar": "hb"
				},
				"name": "value_type",
				"label": "Template",
				"id": "value_type",
				"title": "Template",
				"category": "General",
				"type": "text",
				"fieldType": "select",
				"required": false
			}, {
				"name": "output_variable",
				"label": "Set Result",
				"id": "output_variable",
				"title": "Set Result",
				"category": "General",
				"type": "text",
				"fieldType": "input",
				"required": false
			}],
			"material_icon_color": "blue",
			"displayname": "Invoke stored procedure",
			"material_icon_bg_color": "bg_blue",
			"name": "SQL Invoke Stored Procedure",
			"material_icon_img": "storage",
			"company": "Appup.com",
			"id": "sql-invoke-stored-procedure",
			"category": "Database",
			"info": "Used to invoke a SQL stored procedure"
		}, {
			"thumbnail": "json/nodes/images/new/sql-select-one-node.png",
			"author": "Appup Developer",
			"icon": "json/nodes/icons/new/sql-select-one.png",
			"language": "en",
			"branches": "success,failure",
			"type": {
				"name": "sql-one"
			},
			"material_icon": "storage",
			"workflow_tasklet_class_name": "com.appup.workflows.core.steps.sql.SQLOneStepExecutor",
			"help": "SQL Select and Return first record",
			"ui": [{
				"name": "plugin_name",
				"label": "Database",
				"id": "plugin_name",
				"title": "Please Provide Plugin Config Name",
				"category": "General",
				"type": "text",
				"fieldType": "input",
				"required": true
			}, {
				"name": "value",
				"label": "Query",
				"id": "value",
				"title": "Query",
				"category": "General",
				"type": "text",
				"fieldType": "textarea",
				"required": true
			}, {
				"options": {
					"Free Marker Template": "ftl",
					"*Handlebar": "hb"
				},
				"name": "value_type",
				"label": "Template",
				"id": "value_type",
				"title": "Template",
				"category": "General",
				"type": "text",
				"fieldType": "select",
				"required": false
			}, {
				"name": "output_variable",
				"label": "Set Result",
				"id": "output_variable",
				"title": "Set Result",
				"category": "General",
				"type": "text",
				"fieldType": "input",
				"required": false
			}],
			"material_icon_color": "blue",
			"displayname": "SQL Select One",
			"material_icon_bg_color": "bg_blue",
			"name": "SQL One Step(Custom Plugin)",
			"material_icon_img": "storage",
			"company": "Appup.com",
			"id": "sql_one",
			"category": "Database",
			"info": "Select only one record from the SQL statement executed"
		}, {
			"thumbnail": "json/nodes/images/new/sql-select-one-node.png",
			"author": "Appup Developer",
			"icon": "json/nodes/icons/new/sql-select-one.png",
			"language": "en",
			"branches": "success,failure",
			"type": {
				"name": "sql-one"
			},
			"material_icon": "storage",
			"workflow_tasklet_class_name": "com.appup.workflows.core.steps.sql.SQLOneStepExecutor",
			"help": "SQL Select and Return first record",
			"ui": [{
				"dynamicValue": "CONFIG_NAME",
				"dynamicName": "CONFIG_NAME",
				"name": "plugin_name",
				"label": "Database",
				"id": "plugin_name",
				"title": "Database",
				"category": "General",
				"type": "select",
				"fieldType": "dynamicselect",
				"url": "/app/get-by-category/{{app_id}}/mysql-database/",
				"required": true
			}, {
				"name": "value",
				"label": "Query",
				"id": "value",
				"title": "Query",
				"category": "General",
				"type": "text",
				"fieldType": "textarea",
				"required": true
			}, {
				"options": {
					"Free Marker Template": "ftl",
					"*Handlebar": "hb"
				},
				"name": "value_type",
				"label": "Template",
				"id": "value_type",
				"title": "Template",
				"category": "General",
				"type": "text",
				"fieldType": "select",
				"required": false
			}, {
				"name": "output_variable",
				"label": "Set Result",
				"id": "output_variable",
				"title": "Set Result",
				"category": "General",
				"type": "text",
				"fieldType": "input",
				"required": false
			}],
			"material_icon_color": "blue",
			"displayname": "SQL Select One",
			"material_icon_bg_color": "bg_blue",
			"name": "SQL One Step",
			"material_icon_img": "storage",
			"company": "Appup.com",
			"id": "sql_one",
			"category": "Database",
			"info": "Select only one record from the SQL statement executed"
		}, {
			"thumbnail": "json/nodes/images/new/sql-import-node.png",
			"author": "Appup Developer",
			"icon": "json/nodes/icons/new/sql-import.png",
			"language": "en",
			"branches": "success,failure",
			"type": {
				"name": "sql-s3-import"
			},
			"material_icon": "storage",
			"workflow_tasklet_class_name": "com.appup.workflows.external.steps.aws.s3.SQLS3ImportStepExecutor",
			"help": "Sql S3 Import",
			"ui": [{
				"dynamicValue": "CONFIG_NAME",
				"dynamicName": "CONFIG_NAME",
				"name": "db_plugin_name",
				"label": "Database",
				"id": "db_plugin_name",
				"title": "Database",
				"category": "DataBase",
				"type": "select",
				"fieldType": "dynamicselect",
				"url": "/app/get-by-category/{{app_id}}/mysql-database/",
				"required": true
			}, {
				"name": "table_name",
				"label": "Table",
				"id": "table_name",
				"title": "Table",
				"category": "DataBase",
				"type": "text",
				"fieldType": "input",
				"required": true
			}, {
				"options": {
					"Free Marker Template": "ftl",
					"*Handlebar": "hb"
				},
				"name": "value_type",
				"label": "Type",
				"id": "value_type",
				"title": "Type",
				"category": "General",
				"type": "select",
				"fieldType": "select",
				"required": false
			}, {
				"name": "output_variable",
				"label": "Output Variable",
				"id": "output_variable",
				"title": "Output Variable",
				"category": "General",
				"type": "text",
				"fieldType": "input",
				"required": false
			}, {
				"name": "file_name",
				"label": "FileName",
				"id": "file_name",
				"title": "FileName",
				"category": "S3",
				"type": "text",
				"fieldType": "input",
				"required": true
			}, {
				"name": "bucket_name",
				"label": "Bucket Name",
				"id": "bucket_name",
				"title": "Bucket Name",
				"category": "S3",
				"type": "text",
				"fieldType": "input",
				"required": true
			}, {
				"dynamicValue": "CONFIG_NAME",
				"dynamicName": "CONFIG_NAME",
				"name": "s3_plugin_name",
				"label": "S3 Plugin",
				"id": "s3_plugin_name",
				"title": "Identity",
				"category": "S3",
				"type": "select",
				"fieldType": "dynamicselect",
				"url": "/app/getPluginConfig/{{app_id}}/s3-plugin/",
				"required": true
			}, {
				"options": {
					"True": "true",
					"*False": "false"
				},
				"name": "header",
				"label": "Header",
				"id": "header",
				"title": "Select Header is there or not ",
				"category": "Custom",
				"type": "select",
				"fieldType": "select",
				"required": false
			}, {
				"options": {
					"True": "true",
					"*False": "false"
				},
				"name": "update",
				"label": "Update",
				"id": "update",
				"title": "Select update for updating existing rows ",
				"category": "Custom",
				"type": "select",
				"fieldType": "select",
				"required": false
			}, {
				"name": "fields_terminated_by",
				"label": "Fields terminated by",
				"id": "fields_terminated_by",
				"title": "Field terminated delimiter",
				"category": "Custom",
				"type": "text",
				"fieldType": "input",
				"required": false
			}, {
				"name": "lines_terminated_by",
				"label": "Lines terminated by",
				"id": "lines_terminated_by",
				"title": "Lines terminated delimiter",
				"category": "Custom",
				"type": "text",
				"fieldType": "input",
				"required": false
			}, {
				"name": "custom_fields",
				"label": "Custom fields",
				"id": "custom_fields",
				"title": "Custom header fields separated by comma",
				"category": "Custom",
				"type": "text",
				"fieldType": "input",
				"required": false
			}, {
				"ui": [{
					"name": "key",
					"label": "Key",
					"id": "key",
					"title": "Enter the cloumn_name",
					"category": "Parameters",
					"type": "text",
					"fieldType": "input",
					"required": false
				}, {
					"name": "value",
					"label": "Value",
					"id": "result",
					"title": "Enter the value",
					"category": "Parameters",
					"type": "text",
					"fieldType": "input",
					"required": false
				}],
				"name": "field_values",
				"label": "Filed Values",
				"id": "field_values",
				"title": "",
				"category": "General",
				"type": "grid",
				"fieldType": "grid"
			}],
			"material_icon_color": "blue",
			"displayname": "SQL S3 Import",
			"material_icon_bg_color": "bg_blue",
			"name": "SQL S3 Import",
			"material_icon_img": "storage",
			"company": "Appup.com",
			"id": "SQL_S3_Import",
			"category": "Database",
			"info": "SQL S3 Import"
		}, {
			"thumbnail": "json/nodes/images/new/sql-select-node.png",
			"author": "Appup Developer",
			"icon": "json/nodes/icons/new/sql-select.png",
			"language": "en",
			"branches": "success,failure",
			"type": {
				"name": "sql"
			},
			"material_icon": "storage",
			"workflow_tasklet_class_name": "com.appup.workflows.core.steps.sql.SQLStepExecutor",
			"help": "SQL Select ",
			"ui": [{
				"name": "plugin_name",
				"label": "Database",
				"id": "plugin_name",
				"title": "Please Provide Plugin Config Name",
				"category": "General",
				"type": "text",
				"fieldType": "input",
				"required": true
			}, {
				"name": "value",
				"label": "Query",
				"id": "value",
				"title": "Query",
				"category": "General",
				"type": "text",
				"fieldType": "textarea",
				"required": true
			}, {
				"options": {
					"Free Marker Template": "ftl",
					"*Handlebar": "hb"
				},
				"name": "value_type",
				"label": "Template",
				"id": "value_type",
				"title": "Template",
				"category": "General",
				"type": "text",
				"fieldType": "select",
				"required": false
			}, {
				"name": "output_variable",
				"label": "Set Result",
				"id": "output_variable",
				"title": "Set Result",
				"category": "General",
				"type": "text",
				"fieldType": "input",
				"required": false
			}],
			"material_icon_color": "blue",
			"displayname": "SQL Select",
			"material_icon_bg_color": "bg_blue",
			"name": "SQL Select Step(Custom Plugin)",
			"material_icon_img": "storage",
			"company": "Appup.com",
			"id": "sql_one",
			"category": "Database",
			"info": "Execute a select query and fetch the records"
		}, {
			"thumbnail": "json/nodes/images/new/sql-select-node.png",
			"author": "Appup Developer",
			"icon": "json/nodes/icons/new/sql-select.png",
			"language": "en",
			"branches": "success,failure",
			"type": {
				"name": "sql"
			},
			"material_icon": "storage",
			"workflow_tasklet_class_name": "com.appup.workflows.core.steps.sql.SQLStepExecutor",
			"help": "SQL Select ",
			"ui": [{
				"dynamicValue": "CONFIG_NAME",
				"dynamicName": "CONFIG_NAME",
				"name": "plugin_name",
				"label": "Database",
				"id": "plugin_name",
				"title": "Database",
				"category": "General",
				"type": "select",
				"fieldType": "dynamicselect",
				"url": "/app/get-by-category/{{app_id}}/mysql-database/",
				"required": true
			}, {
				"name": "value",
				"label": "Query",
				"id": "value",
				"title": "Query",
				"category": "General",
				"type": "text",
				"fieldType": "textarea",
				"required": true
			}, {
				"options": {
					"Free Marker Template": "ftl",
					"*Handlebar": "hb"
				},
				"name": "value_type",
				"label": "Template",
				"id": "value_type",
				"title": "Template",
				"category": "General",
				"type": "text",
				"fieldType": "select",
				"required": false
			}, {
				"name": "output_variable",
				"label": "Set Result",
				"id": "output_variable",
				"title": "Set Result",
				"category": "General",
				"type": "text",
				"fieldType": "input",
				"required": false
			}],
			"material_icon_color": "blue",
			"displayname": "SQL Select",
			"material_icon_bg_color": "bg_blue",
			"name": "SQL Select Step",
			"material_icon_img": "storage",
			"company": "Appup.com",
			"id": "sql_one",
			"category": "Database",
			"info": "Execute a select query and fetch the records"
		}, {
			"thumbnail": "json/nodes/images/new/invoke-stored-procedures-node.png",
			"author": "Appup Developer",
			"icon": "json/nodes/icons/new/invoke-stored-procedures.png",
			"language": "en",
			"branches": "success,failure",
			"type": {
				"name": "sql-stored-procedure-with-dynamic-params"
			},
			"material_icon": "storage",
			"workflow_tasklet_class_name": "com.appup.workflows.core.steps.sql. SQLStoredProcedureWithDynamicParametersStepExecutor",
			"help": "Invoke stored procedure with dynamic  parameters",
			"ui": [{
				"name": "procedure_name",
				"label": "Stored Procedure name",
				"id": "procedure_name",
				"title": "Stored Procedure name",
				"category": "Settings",
				"type": "text",
				"fieldType": "input",
				"required": true
			}, {
				"dynamicValue": "CONFIG_NAME",
				"dynamicName": "CONFIG_NAME",
				"name": "plugin_name",
				"label": "DB Plugin",
				"id": "plugin_name",
				"title": "Select plugin",
				"category": "Settings",
				"type": "select",
				"fieldType": "dynamicselect",
				"url": "/app/get-by-category/{{app_id}}/mysql-database/",
				"required": true
			}, {
				"options": {
					"Free Marker Template": "ftl",
					"*Handlebar": "hb"
				},
				"name": "value_type",
				"label": "Template",
				"id": "value_type",
				"title": "Template",
				"category": "General",
				"type": "text",
				"fieldType": "select",
				"required": false
			}, {
				"name": "input_parameters",
				"label": "Input Parmeters",
				"id": "input_parameters",
				"title": "Enter input parameters follow by order key,datatype,value,the datatype should be JDBC data type and the input parameters separated with '|'(pipe) symbol",
				"category": "Settings",
				"type": "text",
				"fieldType": "input",
				"required": false
			}, {
				"name": "output_parameters",
				"label": "Output Parmeters",
				"id": "output_parameters",
				"title": "Enter Output parameters follow by order key,datatype the datatype should be JDBC data type and the output parameters separated with '|'(pipe) symbol",
				"category": "Settings",
				"type": "text",
				"fieldType": "input",
				"required": false
			}, {
				"name": "output_variable",
				"label": "Set Result",
				"id": "output_variable",
				"title": "Set Result",
				"category": "General",
				"type": "text",
				"fieldType": "input",
				"required": false
			}],
			"material_icon_color": "blue",
			"displayname": "Invoke stored procedure with dynamic parameters",
			"material_icon_bg_color": "bg_blue",
			"name": "SQL Invoke Stored Procedure with dynamic parameters",
			"material_icon_img": "storage",
			"company": "Appup.com",
			"id": "sql-stored-procedure-with-dynamic-params",
			"category": "Database",
			"info": "Used to invoke a SQL stored procedure with dynamic parameters"
		}, {
			"thumbnail": "json/nodes/images/new/invoke-stored-procedures-node.png",
			"author": "Appup Developer",
			"icon": "json/nodes/icons/new/invoke-stored-procedures.png",
			"language": "en",
			"branches": "success,failure",
			"type": {
				"name": "sql-stored-procedure-with-params"
			},
			"material_icon": "storage",
			"workflow_tasklet_class_name": "com.appup.workflows.core.steps.sql.SQLStoredProcedureWithParametersStepExecutor",
			"help": "Invoke stored procedure with parameters",
			"ui": [{
				"name": "procedure_name",
				"label": "Stored Procedure name",
				"id": "procedure_name",
				"title": "Stored Procedure name",
				"category": "Settings",
				"type": "text",
				"fieldType": "input",
				"required": true
			}, {
				"dynamicValue": "CONFIG_NAME",
				"dynamicName": "CONFIG_NAME",
				"name": "plugin_name",
				"label": "DB Plugin",
				"id": "plugin_name",
				"title": "Select plugin",
				"category": "Settings",
				"type": "select",
				"fieldType": "dynamicselect",
				"url": "/app/get-by-category/{{app_id}}/mysql-database/",
				"required": true
			}, {
				"options": {
					"Free Marker Template": "ftl",
					"*Handlebar": "hb"
				},
				"name": "value_type",
				"label": "Template",
				"id": "value_type",
				"title": "Template",
				"category": "General",
				"type": "text",
				"fieldType": "select",
				"required": false
			}, {
				"ui": [{
					"name": "key",
					"label": "Name",
					"id": "key",
					"title": "Enter Input Parameter Name",
					"category": "Input Parameters",
					"type": "text",
					"fieldType": "input",
					"required": false
				}, {
					"options": {
						"CHAR": "CHAR",
						"VARCHAR": "VARCHAR",
						"LONGVARCHAR": "LONGVARCHAR",
						"TINYINT": "TINYINT",
						"SMALLINT": "SMALLINT",
						"INTEGER": "INTEGER",
						"BIGINT": "BIGINT",
						"FLOAT": "FLOAT",
						"DOUBLE": "DOUBLE",
						"REAL": "REAL",
						"NUMERIC": "NUMERIC",
						"DECIMAL": "DECIMAL",
						"DATE": "DATE",
						"TIME": "TIME",
						"TIMESTAMP": "TIMESTAMP"
					},
					"name": "type",
					"label": "Type of Input Parameter",
					"id": "type",
					"title": "Enter Input Parameter type",
					"category": "Input Parameters",
					"type": "select",
					"fieldType": "select",
					"required": true
				}, {
					"name": "value",
					"label": "Value",
					"id": "result",
					"title": "Enter Input Parameter value",
					"category": "Input Parameters",
					"type": "text",
					"fieldType": "input",
					"required": false
				}],
				"name": "input_parameters",
				"label": "Input Prameters",
				"id": "input_parameters",
				"title": "Enter Input Prameters ",
				"category": "General",
				"type": "grid",
				"fieldType": "grid",
				"required": false
			}, {
				"ui": [{
					"name": "key",
					"label": "Name",
					"id": "key",
					"title": "Enter Output Parameter Name",
					"category": "Output Parameters",
					"type": "text",
					"fieldType": "input",
					"required": false
				}, {
					"options": {
						"CHAR": "CHAR",
						"VARCHAR": "VARCHAR",
						"LONGVARCHAR": "LONGVARCHAR",
						"TINYINT": "TINYINT",
						"SMALLINT": "SMALLINT",
						"INTEGER": "INTEGER",
						"BIGINT": "BIGINT",
						"FLOAT": "FLOAT",
						"DOUBLE": "DOUBLE",
						"REAL": "REAL",
						"NUMERIC": "NUMERIC",
						"DECIMAL": "DECIMAL",
						"DATE": "DATE",
						"TIME": "TIME",
						"TIMESTAMP": "TIMESTAMP"
					},
					"name": "type",
					"label": "Type of Output Parameter",
					"id": "type",
					"title": "Enter Output Parameter type",
					"category": "Output Parameters",
					"type": "select",
					"fieldType": "select",
					"required": true
				}],
				"name": "output_parameters",
				"label": "Output Prameters",
				"id": "output_parameters",
				"title": "Enter Output Parameters ",
				"category": "General",
				"type": "grid",
				"fieldType": "grid",
				"required": false
			}, {
				"name": "output_variable",
				"label": "Set Result",
				"id": "output_variable",
				"title": "Set Result",
				"category": "General",
				"type": "text",
				"fieldType": "input",
				"required": false
			}],
			"material_icon_color": "blue",
			"displayname": "Invoke stored procedure with parameters",
			"material_icon_bg_color": "bg_blue",
			"name": "SQL Invoke Stored Procedure with parameters",
			"material_icon_img": "storage",
			"company": "Appup.com",
			"id": "sql-stored-procedure-with-params",
			"category": "Database",
			"info": "Used to invoke a SQL stored procedure with parameters"
		}, {
			"thumbnail": "json/nodes/images/new/sql-update-node.png",
			"author": "Appup Developer",
			"icon": "json/nodes/icons/new/sql-update.png",
			"language": "en",
			"branches": "success,failure",
			"type": {
				"name": "sql-update"
			},
			"material_icon": "storage",
			"workflow_tasklet_class_name": "com.appup.workflows.core.steps.sql.SQLUpdateStepExecutor",
			"help": "SQL Update Query Execution",
			"ui": [{
				"name": "plugin_name",
				"label": "Database",
				"id": "plugin_name",
				"title": "Please Provide Plugin Config Name",
				"category": "General",
				"type": "text",
				"fieldType": "input",
				"required": true
			}, {
				"name": "value",
				"label": "Query",
				"id": "value",
				"title": "Query",
				"category": "General",
				"type": "text",
				"fieldType": "textarea",
				"required": true
			}, {
				"options": {
					"Free Marker Template": "ftl",
					"*Handlebar": "hb"
				},
				"name": "value_type",
				"label": "Template",
				"id": "value_type",
				"title": "Template",
				"category": "General",
				"type": "text",
				"fieldType": "select",
				"required": false
			}, {
				"name": "output_variable",
				"label": "Set Result",
				"id": "output_variable",
				"title": "Set Result",
				"category": "General",
				"type": "text",
				"fieldType": "input",
				"required": false
			}],
			"material_icon_color": "blue",
			"displayname": "SQL Update",
			"material_icon_bg_color": "bg_blue",
			"name": "SQL Update(Custom Plugin)",
			"material_icon_img": "storage",
			"company": "Appup.com",
			"id": "Sql_Update_Step",
			"category": "Database",
			"info": "Update database table records"
		}, {
			"thumbnail": "json/nodes/images/new/sql-update-node.png",
			"author": "Appup Developer",
			"icon": "json/nodes/icons/new/sql-update.png",
			"language": "en",
			"branches": "success,failure",
			"type": {
				"name": "sql-update"
			},
			"material_icon": "storage",
			"workflow_tasklet_class_name": "com.appup.workflows.core.steps.sql.SQLUpdateStepExecutor",
			"help": "SQL Update Query Execution",
			"ui": [{
				"dynamicValue": "CONFIG_NAME",
				"dynamicName": "CONFIG_NAME",
				"name": "plugin_name",
				"label": "Database",
				"id": "plugin_name",
				"title": "Database",
				"category": "General",
				"type": "select",
				"fieldType": "dynamicselect",
				"url": "/app/get-by-category/{{app_id}}/mysql-database/",
				"required": true
			}, {
				"name": "value",
				"label": "Query",
				"id": "value",
				"title": "Query",
				"category": "General",
				"type": "text",
				"fieldType": "textarea",
				"required": true
			}, {
				"options": {
					"Free Marker Template": "ftl",
					"*Handlebar": "hb"
				},
				"name": "value_type",
				"label": "Template",
				"id": "value_type",
				"title": "Template",
				"category": "General",
				"type": "text",
				"fieldType": "select",
				"required": false
			}, {
				"name": "output_variable",
				"label": "Set Result",
				"id": "output_variable",
				"title": "Set Result",
				"category": "General",
				"type": "text",
				"fieldType": "input",
				"required": false
			}],
			"material_icon_color": "blue",
			"displayname": "SQL Update",
			"material_icon_bg_color": "bg_blue",
			"name": "SQL Update",
			"material_icon_img": "storage",
			"company": "Appup.com",
			"id": "Sql_Update_Step",
			"category": "Database",
			"info": "Update database table records"
		}, {
			"thumbnail": "json/nodes/images/new/sql-export-node.png",
			"author": "Appup Developer",
			"icon": "json/nodes/icons/new/sql-export.png",
			"language": "en",
			"branches": "success,failure",
			"type": {
				"name": "sql-s3-export"
			},
			"material_icon": "storage",
			"workflow_tasklet_class_name": "com.appup.workflows.external.steps.aws.s3.SQLS3ExportStepExecutor",
			"help": "SQL Export",
			"ui": [{
				"dynamicValue": "CONFIG_NAME",
				"dynamicName": "CONFIG_NAME",
				"name": "mysql_plugin_name",
				"label": "Database",
				"id": "mysql_plugin_name",
				"title": "Database",
				"category": "General",
				"type": "select",
				"fieldType": "dynamicselect",
				"url": "/app/get-by-category/{{app_id}}/mysql-database/",
				"required": false
			}, {
				"name": "value",
				"label": "Query",
				"id": "value",
				"title": "Query",
				"category": "General",
				"type": "text",
				"fieldType": "input",
				"required": false
			}, {
				"options": {
					"Free Marker Template": "ftl",
					"*Handlebar": "hb"
				},
				"name": "value_type",
				"label": "Type",
				"id": "value_type",
				"title": "Type",
				"category": "General",
				"type": "select",
				"fieldType": "select",
				"required": false
			}, {
				"name": "bucket_name",
				"label": "Bucket Name",
				"id": "bucket_name",
				"title": "Bucket Name",
				"category": "General",
				"type": "text",
				"fieldType": "input",
				"required": false
			}, {
				"name": "file_name",
				"label": "File Name",
				"id": "file_name",
				"title": "File Name",
				"category": "General",
				"type": "text",
				"fieldType": "input",
				"required": false
			}, {
				"dynamicValue": "CONFIG_NAME",
				"dynamicName": "CONFIG_NAME",
				"name": "s3_plugin_name",
				"label": "S3 Plugin",
				"id": "s3_plugin_name",
				"title": "Identity",
				"category": "General",
				"type": "select",
				"fieldType": "dynamicselect",
				"url": "/app/getPluginConfig/{{app_id}}/s3-plugin/",
				"required": true
			}, {
				"name": "output_variable",
				"label": "Output Variable",
				"id": "output_variable",
				"title": "Output Variable",
				"category": "General",
				"type": "text",
				"fieldType": "input",
				"required": false
			}],
			"material_icon_color": "blue",
			"displayname": "SQL S3 Export",
			"material_icon_bg_color": "bg_blue",
			"name": "SQL S3 Export",
			"material_icon_img": "storage",
			"company": "Appup.com",
			"id": "SQL_S3_Export",
			"category": "Database",
			"info": "SQL Export"
		}, {
			"name": "SQS Producer",
			"thumbnail": "json/nodes/images/common/jsonio.png",
			"icon": "json/nodes/icons/common/jsonio.png",
			"info": "SQS Producer Step will push each messages to SQS Queue",
			"help": "Step Help",
			"author": "Appup Team",
			"language": "en",
			"type": {
				"name": "sqs-producer"
			},
			"branches": "success,failure",
			"material_icon": "settings",
			"workflow_tasklet_class_name": "com.appup.workflows.core.steps.sqs.SQSProducerStepExecutor",
			"ui": [{
				"label": "Queue Name",
				"category": "Settings",
				"name": "queue_name",
				"id": "queue_name",
				"title": "Please enter queue name",
				"fieldType": "input",
				"type": "text",
				"required": true
			}, {
				"label": "Message",
				"category": "Settings",
				"name": "message",
				"id": "message",
				"title": "Please enter message",
				"fieldType": "input",
				"type": "text",
				"required": true
			}, {
				"options": {
					"Free Marker Template": "ftl",
					"*Handlebar": "hb"
				},
				"name": "value_type",
				"label": "Select Template",
				"id": "value_type",
				"title": "Template type",
				"category": "Settings",
				"type": "select",
				"fieldType": "select",
				"required": false
			}, {
				"dynamicValue": "CONFIG_NAME",
				"dynamicName": "CONFIG_NAME",
				"name": "plugin_name",
				"label": "SQS Plugin",
				"id": "plugin_name",
				"title": "SQS Producer plugin name",
				"category": "Settings",
				"type": "select",
				"fieldType": "dynamicselect",
				"url": "/app/getPluginConfig/{{app_id}}/sqs-plugin/",
				"required": true
			}],
			"material_icon_color": "blue",
			"displayname": "SQS Producer",
			"material_icon_bg_color": "bg_blue",
			"material_icon_img": "storage",
			"company": "Appup.com",
			"id": "SQS_Producer_step2",
			"category": "utilities"
		}, {
			"thumbnail": "json/nodes/images/check_campaign.png",
			"unique_branches": "yes",
			"dynamicports": "yes",
			"author": "Appup Developer",
			"dynamicbranch": "key",
			"dynamicportkey": "cases",
			"icon": "json/nodes/icons/common/switch.png",
			"language": "en",
			"branches": "",
			"type": {
				"name": "switch-case"
			},
			"material_icon": "format_list_bulleted",
			"workflow_tasklet_class_name": "com.appup.workflows.core.steps.SwitchCaseStepExecutor",
			"help": "Switch case Step",
			"ui": [{
				"options": {
					"Free Marker Template": "ftl",
					"*Handlebar": "hb"
				},
				"name": "value_type",
				"label": "Template Type",
				"id": "value",
				"category": "Settings",
				"title": "Select template type",
				"type": "select",
				"fieldType": "select",
				"required": true
			}, {
				"name": "variable",
				"label": "Switch Case Input Variable",
				"id": "variable",
				"category": "Settings",
				"title": "Enter Switch Case Input Variable",
				"type": "text",
				"fieldType": "input",
				"required": true
			}, {
				"ui": [{
					"name": "key",
					"label": "Case",
					"id": "key",
					"title": "Enter value",
					"type": "text",
					"fieldType": "input",
					"required": true
				}],
				"name": "cases",
				"label": "Cases",
				"id": "cases",
				"category": "Settings",
				"title": "",
				"type": "grid",
				"fieldType": "grid",
				"required": false
			}],
			"material_icon_color": "blue",
			"displayname": "Switch case",
			"material_icon_bg_color": "bg_blue",
			"name": "Switch Case",
			"material_icon_img": "storage",
			"company": "Appup.com",
			"id": "Switch_Case_Step",
			"category": "Utilities",
			"info": "Evaluate a series of conditions and run the code corresponding to the true ones "
		}, {
			"thumbnail": "json/nodes/images/common/jsonio.png",
			"author": "Appup Developer",
			"icon": "json/nodes/icons/common/jsonio.png",
			"language": "en",
			"branches": "success,failure,task_scheduled",
			"type": {
				"name": "task-flow-custom"
			},
			"material_icon": "call_to_action",
			"workflow_tasklet_class_name": "com.appup.workflows.core.steps.automation.rest.taskflow.TaskFlowCustomStepExecutor",
			"help": "Integrate your workflow to execute the multiple tasks",
			"ui": [{
				"name": "tasks",
				"label": "Tasks",
				"id": "tasks",
				"rows": "10",
				"cols": "80",
				"title": "Enter Tasks Variable Name",
				"category": "General",
				"type": "text",
				"fieldType": "input",
				"required": true
			}, {
				"name": "task_metadata",
				"label": "Task Meta Information",
				"id": "task_metadata",
				"rows": "10",
				"cols": "80",
				"title": "Enter Task Meta Information data key ",
				"category": "General",
				"type": "text",
				"fieldType": "input",
				"required": false
			}, {
				"name": "context_headers",
				"label": "Context Headers Information",
				"id": "context_headers",
				"rows": "10",
				"cols": "80",
				"title": "Enter Context Headers Information data key ",
				"category": "General",
				"type": "text",
				"fieldType": "input",
				"required": false
			}, {
				"dynamicValue": "CONFIG_NAME",
				"dynamicName": "CONFIG_NAME",
				"name": "db_plugin",
				"label": "Database plugin",
				"id": "db_plugin",
				"title": "Database Plugin",
				"category": "General",
				"type": "select",
				"fieldType": "dynamicselect",
				"url": "/app/get-by-category/{{app_id}}/mysql-database/",
				"required": false
			}, {
				"options": {
					"Free Marker Template": "ftl",
					"*Handlebar": "hb"
				},
				"name": "value_type",
				"label": "Select Template",
				"id": "value_type",
				"title": "Template type",
				"category": "General",
				"type": "select",
				"fieldType": "select",
				"required": false
			}, {
				"name": "output_variable",
				"label": "Output Variable",
				"id": "output_variable",
				"title": "Enter Tasks",
				"category": "General",
				"type": "text",
				"fieldType": "input",
				"required": true
			}],
			"material_icon_color": "blue",
			"displayname": "TASK Flow Custom Step",
			"material_icon_bg_color": "bg_blue",
			"name": "TASK Flow Custom Step",
			"material_icon_img": "storage",
			"company": "Appup.com",
			"id": "TASK Flow Custom Step",
			"category": "Utilities",
			"info": "Integrate your workflow to execute the multiple tasks"
		}, {
			"thumbnail": "json/nodes/images/common/jsonio.png",
			"author": "Appup Developer",
			"icon": "json/nodes/icons/common/jsonio.png",
			"language": "en",
			"branches": "success,failure,task_scheduled",
			"type": {
				"name": "task-flow-event"
			},
			"material_icon": "call_to_action",
			"workflow_tasklet_class_name": "com.appup.workflows.core.steps.automation.event.taskflow.TaskFlowStepExecutor",
			"help": "Integrate your workflow to execute the multiple tasks",
			"ui": [{
				"name": "tasks",
				"label": "Tasks",
				"id": "tasks",
				"rows": "10",
				"cols": "80",
				"title": "Enter Tasks Variable Name",
				"category": "General",
				"type": "text",
				"fieldType": "input",
				"required": true
			}, {
				"ui": [{
					"options": {
						"REST": "REST"
					},
					"name": "task_type",
					"label": "Task type",
					"id": "task_type",
					"title": "Task type",
					"category": "General",
					"type": "select",
					"fieldType": "select",
					"required": true
				}, {
					"name": "type",
					"label": "Type",
					"id": "type",
					"title": "Enter the Type",
					"category": "General",
					"type": "text",
					"fieldType": "input",
					"required": true
				}, {
					"name": "url",
					"label": "Url",
					"id": "url",
					"title": "Enter the Url",
					"category": "General",
					"type": "text",
					"fieldType": "input",
					"required": true
				}, {
					"options": {
						"POST": "POST",
						"GET": "GET",
						"PUT": "PUT",
						"DELETE": "DELETE"
					},
					"name": "method",
					"label": "Method",
					"id": "method",
					"title": "HTTP Method",
					"category": "General",
					"type": "select",
					"fieldType": "select",
					"required": true
				}],
				"name": "task_metadata",
				"label": "Task Meta Information",
				"id": "task_metadata",
				"title": "Enter Task Meta Information ",
				"category": "General",
				"type": "grid",
				"fieldType": "grid",
				"required": false
			}, {
				"ui": [{
					"name": "key",
					"label": "Key",
					"id": "key",
					"title": "Enter the value",
					"category": "General",
					"type": "text",
					"fieldType": "input",
					"required": true
				}, {
					"name": "value",
					"label": "Value",
					"id": "result",
					"title": "Enter the value",
					"category": "General",
					"type": "text",
					"fieldType": "input",
					"required": true
				}],
				"name": "context_headers",
				"label": "Context_Headers",
				"id": "context_headers",
				"title": "Enter Headers ",
				"category": "General",
				"type": "grid",
				"fieldType": "grid",
				"required": false
			}, {
				"dynamicValue": "CONFIG_NAME",
				"dynamicName": "CONFIG_NAME",
				"name": "db_plugin",
				"label": "Database plugin",
				"id": "db_plugin",
				"title": "Database Plugin",
				"category": "Settings",
				"type": "select",
				"fieldType": "dynamicselect",
				"url": "/app/get-by-category/{{app_id}}/mysql-database/",
				"required": false
			}, {
				"dynamicValue": "CONFIG_NAME",
				"dynamicName": "CONFIG_NAME",
				"name": "activemq_plugin",
				"label": "ActiveMQ Plugin",
				"id": "activemq_plugin",
				"title": "ActiveMQ Producer plugin name",
				"category": "Settings",
				"type": "select",
				"fieldType": "dynamicselect",
				"url": "/app/getPluginConfig/{{app_id}}/active-mq/",
				"required": true
			}, {
				"options": {
					"Free Marker Template": "ftl",
					"*Handlebar": "hb"
				},
				"name": "value_type",
				"label": "Select Template",
				"id": "value_type",
				"title": "Template type",
				"category": "General",
				"type": "select",
				"fieldType": "select",
				"required": false
			}, {
				"name": "output_variable",
				"label": "Output Variable",
				"id": "output_variable",
				"title": "Enter Tasks",
				"category": "General",
				"type": "text",
				"fieldType": "input",
				"required": true
			}, {
				"name": "activemq_out_variable",
				"label": "ActiveMQ Trigger Output Variable",
				"id": "activemq_out_variable",
				"title": "Enter Output Variable",
				"category": "Settings",
				"type": "text",
				"fieldType": "input",
				"required": true
			}, {
				"name": "queue_name",
				"label": "Queue Name",
				"id": "queue_name",
				"title": "Enter Queue Name",
				"category": "Settings",
				"type": "text",
				"fieldType": "input",
				"required": true
			}],
			"material_icon_color": "blue",
			"displayname": "TASK Flow(Event Trigger)",
			"material_icon_bg_color": "bg_blue",
			"name": "TASK Flow(Event Trigger)",
			"material_icon_img": "storage",
			"company": "Appup.com",
			"id": "TASK Flow(Event Trigger)",
			"category": "Utilities",
			"info": "Integrate your workflow to execute the multiple tasks"
		}, {
			"thumbnail": "json/nodes/images/common/jsonio.png",
			"author": "Appup Developer",
			"icon": "json/nodes/icons/common/jsonio.png",
			"language": "en",
			"branches": "success,failure,task_scheduled",
			"type": {
				"name": "task-flow-event-v2"
			},
			"material_icon": "call_to_action",
			"workflow_tasklet_class_name": "com.appup.workflows.core.steps.automation.event.taskflowv2.TaskFlowStepExecutor",
			"help": "Integrate your workflow to execute the multiple tasks",
			"ui": [{
				"name": "tasks",
				"label": "Tasks",
				"id": "tasks",
				"rows": "10",
				"cols": "80",
				"title": "Enter Tasks Variable Name",
				"category": "General",
				"type": "text",
				"fieldType": "input",
				"required": true
			}, {
				"ui": [{
					"options": {
						"REST": "REST"
					},
					"name": "task_type",
					"label": "Task type",
					"id": "task_type",
					"title": "Task type",
					"category": "General",
					"type": "select",
					"fieldType": "select",
					"required": true
				}, {
					"name": "type",
					"label": "Type",
					"id": "type",
					"title": "Enter the Type",
					"category": "General",
					"type": "text",
					"fieldType": "input",
					"required": true
				}, {
					"name": "url",
					"label": "Url",
					"id": "url",
					"title": "Enter the Url",
					"category": "General",
					"type": "text",
					"fieldType": "input",
					"required": true
				}, {
					"options": {
						"POST": "POST",
						"GET": "GET",
						"PUT": "PUT",
						"DELETE": "DELETE"
					},
					"name": "method",
					"label": "Method",
					"id": "method",
					"title": "HTTP Method",
					"category": "General",
					"type": "select",
					"fieldType": "select",
					"required": true
				}],
				"name": "task_metadata",
				"label": "Task Meta Information",
				"id": "task_metadata",
				"title": "Enter Task Meta Information ",
				"category": "General",
				"type": "grid",
				"fieldType": "grid",
				"required": false
			}, {
				"ui": [{
					"name": "key",
					"label": "Key",
					"id": "key",
					"title": "Enter the value",
					"category": "General",
					"type": "text",
					"fieldType": "input",
					"required": true
				}, {
					"name": "value",
					"label": "Value",
					"id": "result",
					"title": "Enter the value",
					"category": "General",
					"type": "text",
					"fieldType": "input",
					"required": true
				}],
				"name": "context_headers",
				"label": "Context_Headers",
				"id": "context_headers",
				"title": "Enter Headers ",
				"category": "General",
				"type": "grid",
				"fieldType": "grid",
				"required": false
			}, {
				"dynamicValue": "CONFIG_NAME",
				"dynamicName": "CONFIG_NAME",
				"name": "db_plugin",
				"label": "Database plugin",
				"id": "db_plugin",
				"title": "Database Plugin",
				"category": "Settings",
				"type": "select",
				"fieldType": "dynamicselect",
				"url": "/app/get-by-category/{{app_id}}/mysql-database/",
				"required": false
			}, {
				"dynamicValue": "CONFIG_NAME",
				"dynamicName": "CONFIG_NAME",
				"name": "rest_plugin",
				"label": "Rest Plugin",
				"id": "rest_plugin",
				"title": "Rest plugin",
				"category": "Settings",
				"type": "select",
				"fieldType": "dynamicselect",
				"url": "/app/getPluginConfig/{{app_id}}/rest-plugin/",
				"required": true
			}, {
				"options": {
					"Free Marker Template": "ftl",
					"*Handlebar": "hb"
				},
				"name": "value_type",
				"label": "Select Template",
				"id": "value_type",
				"title": "Template type",
				"category": "General",
				"type": "select",
				"fieldType": "select",
				"required": false
			}, {
				"name": "output_variable",
				"label": "Output Variable",
				"id": "output_variable",
				"title": "Enter Tasks",
				"category": "General",
				"type": "text",
				"fieldType": "input",
				"required": true
			}, {
				"name": "sqs_out_variable",
				"label": "SQS Trigger Output Variable",
				"id": "sqs_out_variable",
				"title": "Enter Output Variable",
				"category": "Settings",
				"type": "text",
				"fieldType": "input",
				"required": true
			}, {
				"name": "bulk_app_url",
				"label": "Bulk App Url",
				"id": "bulk_app_url",
				"title": "Enter Bulk App Url",
				"category": "Settings",
				"type": "text",
				"fieldType": "input",
				"required": true
			}, {
				"name": "queue_name",
				"label": "Queue Name",
				"id": "queue_name",
				"title": "Enter Queue Name",
				"category": "Settings",
				"type": "text",
				"fieldType": "input",
				"required": true
			}],
			"material_icon_color": "blue",
			"displayname": "TASK Flow(Event Trigger V2) ",
			"material_icon_bg_color": "bg_blue",
			"name": "TASK Flow(Event Trigger V2)",
			"material_icon_img": "storage",
			"company": "Appup.com",
			"id": "TASK Flow(Event Trigger V2)",
			"category": "Utilities",
			"info": "Integrate your workflow to execute the multiple tasks"
		}, {
			"thumbnail": "json/nodes/images/common/jsonio.png",
			"author": "Appup Developer",
			"icon": "json/nodes/icons/common/jsonio.png",
			"language": "en",
			"branches": "success,failure,task_scheduled",
			"type": {
				"name": "task-flow-rest-v2"
			},
			"material_icon": "call_to_action",
			"workflow_tasklet_class_name": "com.appup.workflows.core.steps.automation.rest.taskflowv2.TaskFlowRestStepExecutor",
			"help": "Integrate your workflow to execute the multiple tasks",
			"ui": [{
				"name": "tasks",
				"label": "Tasks",
				"id": "tasks",
				"rows": "10",
				"cols": "80",
				"title": "Enter Tasks Variable Name",
				"category": "General",
				"type": "text",
				"fieldType": "input",
				"required": true
			}, {
				"ui": [{
					"options": {
						"REST": "REST"
					},
					"name": "task_type",
					"label": "Task type",
					"id": "task_type",
					"title": "Task type",
					"category": "General",
					"type": "select",
					"fieldType": "select",
					"required": true
				}, {
					"name": "type",
					"label": "Type",
					"id": "type",
					"title": "Enter the Type",
					"category": "General",
					"type": "text",
					"fieldType": "input",
					"required": true
				}, {
					"name": "url",
					"label": "Url",
					"id": "url",
					"title": "Enter the Url",
					"category": "General",
					"type": "text",
					"fieldType": "input",
					"required": true
				}, {
					"options": {
						"POST": "POST",
						"GET": "GET",
						"PUT": "PUT",
						"DELETE": "DELETE"
					},
					"name": "method",
					"label": "Method",
					"id": "method",
					"title": "HTTP Method",
					"category": "General",
					"type": "select",
					"fieldType": "select",
					"required": true
				}],
				"name": "task_metadata",
				"label": "Task Meta Information",
				"id": "task_metadata",
				"title": "Enter Task Meta Information ",
				"category": "General",
				"type": "grid",
				"fieldType": "grid",
				"required": false
			}, {
				"ui": [{
					"name": "key",
					"label": "Key",
					"id": "key",
					"title": "Enter the value",
					"category": "General",
					"type": "text",
					"fieldType": "input",
					"required": true
				}, {
					"name": "value",
					"label": "Value",
					"id": "result",
					"title": "Enter the value",
					"category": "General",
					"type": "text",
					"fieldType": "input",
					"required": true
				}],
				"name": "context_headers",
				"label": "Context_Headers",
				"id": "context_headers",
				"title": "Enter Headers ",
				"category": "General",
				"type": "grid",
				"fieldType": "grid",
				"required": false
			}, {
				"dynamicValue": "CONFIG_NAME",
				"dynamicName": "CONFIG_NAME",
				"name": "db_plugin",
				"label": "Database plugin",
				"id": "db_plugin",
				"title": "Database Plugin",
				"category": "Settings",
				"type": "select",
				"fieldType": "dynamicselect",
				"url": "/app/get-by-category/{{app_id}}/mysql-database/",
				"required": false
			}, {
				"dynamicValue": "CONFIG_NAME",
				"dynamicName": "CONFIG_NAME",
				"name": "rest_plugin",
				"label": "Rest Plugin",
				"id": "rest_plugin",
				"title": "Rest plugin",
				"category": "Settings",
				"type": "select",
				"fieldType": "dynamicselect",
				"url": "/app/getPluginConfig/{{app_id}}/rest-plugin/",
				"required": true
			}, {
				"options": {
					"Free Marker Template": "ftl",
					"*Handlebar": "hb"
				},
				"name": "value_type",
				"label": "Select Template",
				"id": "value_type",
				"title": "Template type",
				"category": "General",
				"type": "select",
				"fieldType": "select",
				"required": false
			}, {
				"name": "output_variable",
				"label": "Output Variable",
				"id": "output_variable",
				"title": "Enter Tasks",
				"category": "General",
				"type": "text",
				"fieldType": "input",
				"required": true
			}, {
				"name": "bulk_app_url",
				"label": "Bulk App Url",
				"id": "bulk_app_url",
				"title": "Enter Bulk App Url",
				"category": "Settings",
				"type": "text",
				"fieldType": "input",
				"required": true
			}],
			"material_icon_color": "blue",
			"displayname": "TASK Flow(Rest Trigger V2) ",
			"material_icon_bg_color": "bg_blue",
			"name": "TASK Flow(Rest Trigger V2)",
			"material_icon_img": "storage",
			"company": "Appup.com",
			"id": "TASK Flow(Rest Trigger V2)",
			"category": "Utilities",
			"info": "Integrate your workflow to execute the multiple tasks"
		}, {
			"thumbnail": "json/nodes/images/common/jsonio.png",
			"author": "Appup Developer",
			"icon": "json/nodes/icons/common/jsonio.png",
			"language": "en",
			"branches": "success,failure,task_scheduled",
			"type": {
				"name": "task-flow"
			},
			"material_icon": "call_to_action",
			"workflow_tasklet_class_name": "com.appup.workflows.core.steps.automation.rest.taskflow.TaskFlowStepExecutor",
			"help": "Integrate your workflow to execute the multiple tasks",
			"ui": [{
				"name": "tasks",
				"label": "Tasks",
				"id": "tasks",
				"rows": "10",
				"cols": "80",
				"title": "Enter Tasks Variable Name",
				"category": "General",
				"type": "text",
				"fieldType": "input",
				"required": true
			}, {
				"ui": [{
					"options": {
						"REST": "REST"
					},
					"name": "task_type",
					"label": "Task type",
					"id": "task_type",
					"title": "Task type",
					"category": "General",
					"type": "select",
					"fieldType": "select",
					"required": true
				}, {
					"name": "type",
					"label": "Type",
					"id": "type",
					"title": "Enter the Type",
					"category": "General",
					"type": "text",
					"fieldType": "input",
					"required": true
				}, {
					"name": "url",
					"label": "Url",
					"id": "url",
					"title": "Enter the Url",
					"category": "General",
					"type": "text",
					"fieldType": "input",
					"required": true
				}, {
					"options": {
						"POST": "POST",
						"GET": "GET",
						"PUT": "PUT",
						"DELETE": "DELETE"
					},
					"name": "method",
					"label": "Method",
					"id": "method",
					"title": "HTTP Method",
					"category": "General",
					"type": "select",
					"fieldType": "select",
					"required": true
				}],
				"name": "task_metadata",
				"label": "Task Meta Information",
				"id": "task_metadata",
				"title": "Enter Task Meta Information ",
				"category": "General",
				"type": "grid",
				"fieldType": "grid",
				"required": false
			}, {
				"ui": [{
					"name": "key",
					"label": "Key",
					"id": "key",
					"title": "Enter the value",
					"category": "General",
					"type": "text",
					"fieldType": "input",
					"required": true
				}, {
					"name": "value",
					"label": "Value",
					"id": "result",
					"title": "Enter the value",
					"category": "General",
					"type": "text",
					"fieldType": "input",
					"required": true
				}],
				"name": "context_headers",
				"label": "Context_Headers",
				"id": "context_headers",
				"title": "Enter Headers ",
				"category": "General",
				"type": "grid",
				"fieldType": "grid",
				"required": false
			}, {
				"dynamicValue": "CONFIG_NAME",
				"dynamicName": "CONFIG_NAME",
				"name": "db_plugin",
				"label": "Database plugin",
				"id": "db_plugin",
				"title": "Database Plugin",
				"category": "General",
				"type": "select",
				"fieldType": "dynamicselect",
				"url": "/app/get-by-category/{{app_id}}/mysql-database/",
				"required": false
			}, {
				"options": {
					"Free Marker Template": "ftl",
					"*Handlebar": "hb"
				},
				"name": "value_type",
				"label": "Select Template",
				"id": "value_type",
				"title": "Template type",
				"category": "General",
				"type": "select",
				"fieldType": "select",
				"required": false
			}, {
				"name": "output_variable",
				"label": "Output Variable",
				"id": "output_variable",
				"title": "Enter Tasks",
				"category": "General",
				"type": "text",
				"fieldType": "input",
				"required": true
			}],
			"material_icon_color": "blue",
			"displayname": "TASK Flow",
			"material_icon_bg_color": "bg_blue",
			"name": "TASK Flow",
			"material_icon_img": "storage",
			"company": "Appup.com",
			"id": "TASK Flow",
			"category": "Utilities",
			"info": "Integrate your workflow to execute the multiple tasks"
		}, {
			"thumbnail": "json/nodes/images/common/jsonio.png",
			"author": "Appup Developer",
			"icon": "json/nodes/icons/common/jsonio.png",
			"language": "en",
			"branches": "success,failure,retry_scheduled",
			"type": {
				"name": "task-sequence-event"
			},
			"material_icon": "call_to_action",
			"workflow_tasklet_class_name": "com.appup.workflows.core.steps.automation.event.tasksequence.TaskSequenceStepExecutor",
			"help": "Integrate your workflow to execute the multiple tasks",
			"ui": [{
				"name": "tasks",
				"label": "Tasks",
				"id": "tasks",
				"rows": "10",
				"cols": "80",
				"title": "Enter Tasks Like Array Of JSON's Format",
				"category": "General",
				"type": "textarea",
				"fieldType": "textarea",
				"required": true
			}, {
				"ui": [{
					"options": {
						"REST": "REST"
					},
					"name": "task_type",
					"label": "Task type",
					"id": "task_type",
					"title": "Task type",
					"category": "General",
					"type": "select",
					"fieldType": "select",
					"required": true
				}, {
					"name": "type",
					"label": "Type",
					"id": "type",
					"title": "Enter the Type",
					"category": "General",
					"type": "text",
					"fieldType": "input",
					"required": true
				}, {
					"name": "url",
					"label": "Url",
					"id": "url",
					"title": "Enter the Url",
					"category": "General",
					"type": "text",
					"fieldType": "input",
					"required": true
				}, {
					"options": {
						"POST": "POST",
						"GET": "GET",
						"PUT": "PUT",
						"DELETE": "DELETE"
					},
					"name": "method",
					"label": "Method",
					"id": "method",
					"title": "HTTP Method",
					"category": "General",
					"type": "select",
					"fieldType": "select",
					"required": true
				}, {
					"name": "retries",
					"label": "Retries",
					"id": "retries",
					"title": "Retriess",
					"category": "General",
					"type": "text",
					"fieldType": "input",
					"required": false
				}],
				"name": "task_metadata",
				"label": "Task Meta Information",
				"id": "task_metadata",
				"title": "Enter Task Meta Information ",
				"category": "General",
				"type": "grid",
				"fieldType": "grid",
				"required": false
			}, {
				"ui": [{
					"name": "key",
					"label": "Key",
					"id": "key",
					"title": "Enter the value",
					"category": "General",
					"type": "text",
					"fieldType": "input",
					"required": true
				}, {
					"name": "value",
					"label": "Value",
					"id": "result",
					"title": "Enter the value",
					"category": "General",
					"type": "text",
					"fieldType": "input",
					"required": true
				}],
				"name": "context_headers",
				"label": "Context_Headers",
				"id": "context_headers",
				"title": "Enter Headers ",
				"category": "General",
				"type": "grid",
				"fieldType": "grid",
				"required": false
			}, {
				"dynamicValue": "CONFIG_NAME",
				"dynamicName": "CONFIG_NAME",
				"name": "db_plugin",
				"label": "Database plugin",
				"id": "db_plugin",
				"title": "Database Plugin",
				"category": "General",
				"type": "select",
				"fieldType": "dynamicselect",
				"url": "/app/get-by-category/{{app_id}}/mysql-database/",
				"required": false
			}, {
				"dynamicValue": "CONFIG_NAME",
				"dynamicName": "CONFIG_NAME",
				"name": "activemq_plugin",
				"label": "ActiveMQ Plugin",
				"id": "activemq_plugin",
				"title": "ActiveMQ Producer plugin name",
				"category": "Settings",
				"type": "select",
				"fieldType": "dynamicselect",
				"url": "/app/getPluginConfig/{{app_id}}/active-mq/",
				"required": true
			}, {
				"options": {
					"Free Marker Template": "ftl",
					"*Handlebar": "hb"
				},
				"name": "value_type",
				"label": "Select Template",
				"id": "value_type",
				"title": "Template type",
				"category": "General",
				"type": "select",
				"fieldType": "select",
				"required": false
			}, {
				"name": "output_variable",
				"label": "Output Variable",
				"id": "output_variable",
				"title": "Enter Tasks",
				"category": "General",
				"type": "text",
				"fieldType": "input",
				"required": true
			}, {
				"name": "activemq_out_variable",
				"label": "ActiveMQ Trigger Output Variable",
				"id": "activemq_out_variable",
				"title": "Enter Output Variable",
				"category": "Settings",
				"type": "text",
				"fieldType": "input",
				"required": true
			}, {
				"name": "queue_name",
				"label": "Queue Name",
				"id": "queue_name",
				"title": "Enter Queue Name",
				"category": "Settings",
				"type": "text",
				"fieldType": "input",
				"required": true
			}],
			"material_icon_color": "blue",
			"displayname": "TASK Sequences(Event Trigger)",
			"material_icon_bg_color": "bg_blue",
			"name": "TASK Sequences(Event Trigger)",
			"material_icon_img": "storage",
			"company": "Appup.com",
			"id": "TASK Sequences(Event Trigger)",
			"category": "Utilities",
			"info": "Integrate your workflow to execute the multiple tasks"
		}, {
			"thumbnail": "json/nodes/images/common/jsonio.png",
			"author": "Appup Developer",
			"icon": "json/nodes/icons/common/jsonio.png",
			"language": "en",
			"branches": "success,failure,retry_scheduled",
			"type": {
				"name": "task-sequence"
			},
			"material_icon": "call_to_action",
			"workflow_tasklet_class_name": "com.appup.workflows.core.steps.automation.rest.tasksequence.TaskSequenceStepExecutor",
			"help": "Integrate your workflow to execute the multiple tasks",
			"ui": [{
				"name": "tasks",
				"label": "Tasks",
				"id": "tasks",
				"rows": "10",
				"cols": "80",
				"title": "Enter Tasks Like Array Of JSON's Format",
				"category": "General",
				"type": "textarea",
				"fieldType": "textarea",
				"required": true
			}, {
				"ui": [{
					"options": {
						"REST": "REST"
					},
					"name": "task_type",
					"label": "Task type",
					"id": "task_type",
					"title": "Task type",
					"category": "General",
					"type": "select",
					"fieldType": "select",
					"required": true
				}, {
					"name": "type",
					"label": "Type",
					"id": "type",
					"title": "Enter the Type",
					"category": "General",
					"type": "text",
					"fieldType": "input",
					"required": true
				}, {
					"name": "url",
					"label": "Url",
					"id": "url",
					"title": "Enter the Url",
					"category": "General",
					"type": "text",
					"fieldType": "input",
					"required": true
				}, {
					"options": {
						"POST": "POST",
						"GET": "GET",
						"PUT": "PUT",
						"DELETE": "DELETE"
					},
					"name": "method",
					"label": "Method",
					"id": "method",
					"title": "HTTP Method",
					"category": "General",
					"type": "select",
					"fieldType": "select",
					"required": true
				}, {
					"name": "retries",
					"label": "Retries",
					"id": "retries",
					"title": "Retriess",
					"category": "General",
					"type": "text",
					"fieldType": "input",
					"required": false
				}],
				"name": "task_metadata",
				"label": "Task Meta Information",
				"id": "task_metadata",
				"title": "Enter Task Meta Information ",
				"category": "General",
				"type": "grid",
				"fieldType": "grid",
				"required": false
			}, {
				"ui": [{
					"name": "key",
					"label": "Key",
					"id": "key",
					"title": "Enter the value",
					"category": "General",
					"type": "text",
					"fieldType": "input",
					"required": true
				}, {
					"name": "value",
					"label": "Value",
					"id": "result",
					"title": "Enter the value",
					"category": "General",
					"type": "text",
					"fieldType": "input",
					"required": true
				}],
				"name": "context_headers",
				"label": "Context_Headers",
				"id": "context_headers",
				"title": "Enter Headers ",
				"category": "General",
				"type": "grid",
				"fieldType": "grid",
				"required": false
			}, {
				"dynamicValue": "CONFIG_NAME",
				"dynamicName": "CONFIG_NAME",
				"name": "db_plugin",
				"label": "Database plugin",
				"id": "db_plugin",
				"title": "Database Plugin",
				"category": "General",
				"type": "select",
				"fieldType": "dynamicselect",
				"url": "/app/get-by-category/{{app_id}}/mysql-database/",
				"required": false
			}, {
				"name": "cron_app_url",
				"label": "Cron app Url",
				"id": "cron_app_url",
				"title": "Enter Cron app Url",
				"category": "General",
				"type": "text",
				"fieldType": "input",
				"required": true
			}, {
				"options": {
					"Free Marker Template": "ftl",
					"*Handlebar": "hb"
				},
				"name": "value_type",
				"label": "Select Template",
				"id": "value_type",
				"title": "Template type",
				"category": "General",
				"type": "select",
				"fieldType": "select",
				"required": false
			}, {
				"name": "output_variable",
				"label": "Output Variable",
				"id": "output_variable",
				"title": "Enter Tasks",
				"category": "General",
				"type": "text",
				"fieldType": "input",
				"required": true
			}],
			"material_icon_color": "blue",
			"displayname": "TASK Sequences",
			"material_icon_bg_color": "bg_blue",
			"name": "TASK Sequences",
			"material_icon_img": "storage",
			"company": "Appup.com",
			"id": "TASK Sequences",
			"category": "Utilities",
			"info": "Integrate your workflow to execute the multiple tasks"
		}, {
			"thumbnail": "json/nodes/images/Variables.png",
			"author": "Appup Developer",
			"icon": "json/nodes/icons/crm/addnote1.png",
			"language": "en",
			"branches": "success,failure",
			"type": {
				"name": "template"
			},
			"material_icon": "storage",
			"workflow_tasklet_class_name": "com.appup.workflows.core.steps.utils.TemplateStepExecutor",
			"help": "TEMPLATE Step Execution",
			"ui": [{
				"name": "value",
				"label": "Value",
				"id": "value",
				"title": "Query",
				"category": "General",
				"type": "text",
				"fieldType": "textarea",
				"required": true
			}, {
				"options": {
					"Free Marker Template": "ftl",
					"*Handlebar": "hb"
				},
				"name": "value_type",
				"label": "Template",
				"id": "value_type",
				"title": "Template",
				"category": "General",
				"type": "text",
				"fieldType": "select",
				"required": false
			}, {
				"name": "output_variable",
				"label": "Set Result",
				"id": "output_variable",
				"title": "Set Result",
				"category": "General",
				"type": "text",
				"fieldType": "input",
				"required": false
			}],
			"material_icon_color": "blue",
			"displayname": "Template ",
			"material_icon_bg_color": "bg_blue",
			"name": "Template ",
			"material_icon_img": "storage",
			"company": "Appup.com",
			"id": "TEMPLATE_Step",
			"category": "Database",
			"info": "TEMPLATE Step"
		}, {
			"thumbnail": "json/nodes/images/email/sendemail.png",
			"author": "Appup Developer",
			"icon": "json/nodes/icons/email/sendemail.png",
			"language": "en",
			"branches": "success,failure",
			"type": {
				"name": "twilio-sms"
			},
			"material_icon": "email",
			"workflow_tasklet_class_name": "com.appup.workflow.external.plugin.twilio.steps.twilio.TwilioStepExecutor",
			"help": "Twilio Sms",
			"ui": [{
				"name": "from_number",
				"label": "From (Number)",
				"id": "from_number",
				"title": "Enter Sender Number",
				"category": "Info",
				"type": "text",
				"fieldType": "input",
				"required": true
			}, {
				"name": "to_number",
				"label": "To",
				"id": "to_number",
				"title": "Enter the Receiver Number",
				"category": "Info",
				"type": "text",
				"fieldType": "input",
				"required": true
			}, {
				"name": "body",
				"label": "Body",
				"id": "body",
				"title": "Enter your  body here",
				"category": "Info",
				"type": "textarea",
				"fieldType": "textarea",
				"cols": "50",
				"rows": "25",
				"required": true
			}, {
				"dynamicValue": "CONFIG_NAME",
				"dynamicName": "CONFIG_NAME",
				"name": "plugin_name",
				"label": "Email Plugin",
				"id": "plugin_name",
				"title": "Identity",
				"category": "Settings",
				"type": "select",
				"fieldType": "dynamicselect",
				"url": "/app/getPluginConfig/{{app_id}}/twilio-plugin/",
				"required": true
			}, {
				"options": {
					"Free Marker Template": "ftl",
					"*Handlebar": "hb"
				},
				"name": "value_type",
				"label": "Select Template",
				"id": "value_type",
				"title": "Template type",
				"category": "Settings",
				"type": "select",
				"fieldType": "select",
				"required": false
			}],
			"material_icon_color": "blue",
			"displayname": "Twilio",
			"material_icon_bg_color": "bg_blue",
			"name": "Twilio Sms",
			"material_icon_img": "storage",
			"company": "Appup.com",
			"id": "Twiklio-Sms_Step",
			"category": "Utilities",
			"info": "Twilio Sms"
		}, {
			"thumbnail": "json/nodes/images/common/jsonio.png",
			"author": "Appup Developer",
			"icon": "json/nodes/icons/common/jsonio.png",
			"language": "en",
			"branches": "success,failure",
			"type": {
				"name": "unset-session"
			},
			"material_icon": "storage",
			"workflow_tasklet_class_name": "com.appup.workflows.core.steps.session.UnsetSessionStepExecutor",
			"help": "Remove Session",
			"ui": [],
			"material_icon_color": "blue",
			"displayname": "Unset Session",
			"material_icon_bg_color": "bg_blue",
			"name": "Unset Session",
			"material_icon_img": "storage",
			"company": "Appup.com",
			"id": "unset-session",
			"category": "Developers",
			"info": "Unset Session"
		}, {
			"thumbnail": "json/nodes/images/common/jsonio.png",
			"author": "Appup Developer",
			"icon": "json/nodes/icons/common/jsonio.png",
			"language": "en",
			"branches": "success",
			"type": {
				"name": "un-set-var-multi"
			},
			"material_icon": "storage",
			"workflow_tasklet_class_name": "com.appup.workflows.core.steps.UnSetVarStepExecutor",
			"help": "Remove Variable from map",
			"ui": [{
				"ui": [{
					"name": "key",
					"label": "Key",
					"id": "key",
					"title": "Enter the key",
					"category": "Parameters",
					"type": "text",
					"fieldType": "input",
					"required": false
				}],
				"name": "keys",
				"label": "Keys",
				"id": "keys",
				"title": "Enter Keys",
				"category": "General",
				"type": "grid",
				"fieldType": "grid"
			}],
			"material_icon_color": "blue",
			"displayname": "UnSet Var",
			"material_icon_bg_color": "bg_blue",
			"name": "UnSet Var",
			"material_icon_img": "storage",
			"company": "Appup.com",
			"id": "unset-var-attribute",
			"category": "Utilities",
			"info": "UnSet Var"
		}, {
			"thumbnail": "json/nodes/images/DBRestAPI.png",
			"author": "Appup Developer",
			"icon": "json/nodes/icons/DBRestAPI.png",
			"language": "en",
			"branches": "success,failure",
			"type": {
				"name": "vapid-key"
			},
			"material_icon": "cloud_upload",
			"workflow_tasklet_class_name": "com.appup.workflows.external.steps.VapidKeyStepExecutor",
			"help": "Vapid Public and Private key Generator",
			"ui": [{
				"options": {
					"prime256v1": "prime256v1"
				},
				"name": "param_spec",
				"label": "Param Spec",
				"id": "param_spec",
				"title": "Select Spec",
				"category": "General",
				"type": "select",
				"fieldType": "select",
				"required": true
			}, {
				"name": "output_variable",
				"label": "Output Variable",
				"id": "output_variable",
				"title": "Output Variable",
				"category": "General",
				"type": "text",
				"fieldType": "input",
				"required": true
			}],
			"material_icon_color": "blue",
			"displayname": "Vapid Key Generator",
			"material_icon_bg_color": "bg_blue",
			"name": "Vapid Key Generator",
			"material_icon_img": "storage",
			"company": "Appup.com",
			"id": "vapid_key_gen",
			"category": "Auth",
			"info": "Vapid Key Generator"
		}, {
			"thumbnail": "json/nodes/images/new/redirect-node.png",
			"author": "Appup Developer",
			"icon": "json/nodes/icons/new/redirect.png",
			"language": "en",
			"branches": "success",
			"type": {
				"name": "wait-step"
			},
			"material_icon": "replay",
			"workflow_tasklet_class_name": "com.appup.workflows.external.steps.WaitStepExecutor",
			"help": "To pause the execution of workflow",
			"ui": [{
				"name": "seconds",
				"label": "Seconds",
				"id": "seconds",
				"title": "Please enter the number of seconds",
				"category": "Settings",
				"type": "number",
				"fieldType": "input",
				"required": true
			}],
			"material_icon_color": "blue",
			"displayname": "Wait Node",
			"material_icon_bg_color": "bg_blue",
			"name": "Wait Node",
			"material_icon_img": "storage",
			"company": "Appup.com",
			"id": "Wait_Node_Step",
			"category": "Auth",
			"info": "Wait Node Step"
		}]
	}