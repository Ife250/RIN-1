import { MessageType, Mimetype } from '@adiwajshing/baileys'
import { join } from 'path'
import MessageHandler from '../../Handlers/MessageHandler'
import BaseCommand from '../../lib/BaseCommand'
import WAClient from '../../lib/WAClient'
import { ISimplifiedMessage } from '../../typings'

export default class Command extends BaseCommand {
    constructor(client: WAClient, handler: MessageHandler) {
        super(client, handler, {
            command: 'help',
            description: 'Displays the help menu or shows the info of the command provided',
            category: 'general',
            usage: `${client.config.prefix}help (command_name)`,
            dm: true,
            aliases: ['h']
        })
    }

    run = async (M: ISimplifiedMessage): Promise<void> => {
        const n = [
            './assets/Rin/rin.mp4','./assets/Rin/rin-1.mp4','./assets/Rin/rin-2.mp4','./assets/Rin/rin-3.mp4','./assets/Rin/rin-4.mp4','./assets/Rin/rin-5.mp4','./assets/Rin/rin-6.mp4'
        ]
        let well = n[Math.floor(Math.random() * n.length)]
        return void this.client.sendMessage(M.from, { url: well }, MessageType.video, {quoted:M.WAMessage,
            mimetype: Mimetype.gif,
            caption: `π Ι΄α΄α΄α΄κ±

γ½ α΄ΚΙͺκ± Ιͺκ± α΄ ΚΙͺΙ΄-Κα΄α΄α΄α΄!

π§§ Ιͺκ° Κα΄α΄ Κα΄α΄ α΄ α΄Ι΄Κ Ιͺκ±κ±α΄α΄κ± α΄‘Ιͺα΄Κ α΄Κα΄ Κα΄α΄ α΄Κ α΄Ι΄Κ α΄ΚΚα΄Κ α΄Κα΄Ι΄ α΄α΄Ι΄α΄α΄α΄α΄ Κα΄α΄ α΄α΄‘Ι΄α΄Κ. α΄Κα΄α΄ " ${this.client.config.prefix}α΄α΄‘Ι΄α΄Κ " α΄α΄ α΄α΄Ι΄α΄α΄α΄α΄ α΄α΄‘Ι΄α΄Κ!

π α΄Κα΄κ°Ιͺx - ${this.client.config.prefix}
ββββββββββββββββ
-πΆπ΄π½π΄ππ°π» π§£

π ${this.client.config.prefix}οΌ¨ο½ο½ο½1 [${this.client.config.prefix}ο½οΌ]

-ππ΄π΄π±π π§£

π ${this.client.config.prefix}οΌ¨ο½ο½ο½2 [${this.client.config.prefix}ο½2]

-π΅ππ½ π§£

π ${this.client.config.prefix}οΌ¨ο½ο½ο½3 [${this.client.config.prefix}ο½3]

-πΌπ΄π³πΈπ° π§£

 π ${this.client.config.prefix}οΌ¨ο½ο½ο½4 [${this.client.config.prefix}ο½4]

-πππΈπ»π π§£

 π ${this.client.config.prefix}οΌ¨ο½ο½ο½5 [${this.client.config.prefix}ο½5]

-πΌπΎπ³π΄ππ°ππΈπΎπ½ π§£

π ${this.client.config.prefix}οΌ¨ο½ο½ο½6 [${this.client.config.prefix}ο½6]

-π΄π³ππ²π°ππΈππ΄ π§£

π ${this.client.config.prefix}οΌ¨ο½ο½ο½7 [${this.client.config.prefix}ο½7]

-π½ππ΅π π§£

π ${this.client.config.prefix}οΌ¨ο½ο½ο½8 [${this.client.config.prefix}ο½8]

ββββββββββββββββ
 ββββ[ αα₯α α·αδΈ ]βββββ
βββββββββββββββ
β   π§¨ αα₯α
β   Β©οΈ Synthesized Infinity Botto
βββββββββββββββ
ββ[πππ―π ππ«πππ­ πππ²]ββ
π *Note: Use ${this.client.config.prefix}help <command_name> to view the command info*` }
        )
    }
}
