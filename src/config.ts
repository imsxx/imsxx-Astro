import type {
	ExpressiveCodeConfig,
	LicenseConfig,
	NavBarConfig,
	ProfileConfig,
	SiteConfig,
} from "./types/config";
import { LinkPreset } from "./types/config";

export const siteConfig: SiteConfig = {
	title: "梦随乡兮",
	subtitle: "对编程感兴趣的非程序员",
	lang: "zh_CN", // 语言设置：'en'(英语), 'zh_CN'(简体中文), 'zh_TW'(繁体中文), 'ja'(日语), 'ko'(韩语), 'es'(西班牙语), 'th'(泰语), 'vi'(越南语)
	themeColor: {
		hue: 145, // 主题色调，范围 0-360。例如：红色: 0, 青绿: 200, 青色: 250, 粉色: 345
		fixed: false, // 是否隐藏访客的主题色选择器
	},
	banner: {
		enable: true,
		src: "assets/images/banner.jpg", // 横幅图片路径，相对于 /src 目录。如果以 '/' 开头则相对于 /public 目录
		position: "center", // 横幅图片位置，等同于 CSS object-position，仅支持 'top'(顶部), 'center'(居中), 'bottom'(底部)。默认为 'center'
		credit: {
			enable: false, // 是否显示横幅图片的版权信息
			text: "", // 要显示的版权文本
			url: "", // （可选）原作品或艺术家页面的链接
		},
	},
	toc: {
		enable: true, // 是否在文章右侧显示目录
		depth: 2, // 目录中显示的最大标题层级，范围 1-3
	},
	favicon: [
		// 保持此数组为空以使用默认网站图标
		// {
		//   src: '/favicon/icon.png',    // 网站图标路径，相对于 /public 目录
		//   theme: 'light',              // （可选）'light'(浅色) 或 'dark'(深色)，仅在为浅色和深色模式设置不同图标时使用
		//   sizes: '32x32',              // （可选）网站图标尺寸，仅在有不同尺寸的图标时设置
		// }
	],
};

export const navBarConfig: NavBarConfig = {
	links: [
		LinkPreset.Home,
		LinkPreset.Archive,
		LinkPreset.About,
	],
};

export const profileConfig: ProfileConfig = {
	avatar: "assets/images/avatar.png", // 头像路径，相对于 /src 目录。如果以 '/' 开头则相对于 /public 目录
	name: "梦随乡兮",
	bio: "热爱技术，专注于Web开发、服务器运维和数字化解决方案。",
	links: [],
};

export const licenseConfig: LicenseConfig = {
	enable: true,
	name: "CC BY-NC-SA 4.0",
	url: "https://creativecommons.org/licenses/by-nc-sa/4.0/",
};

export const expressiveCodeConfig: ExpressiveCodeConfig = {
	// 注意：某些样式（如背景色）会被覆盖，请查看 astro.config.mjs 文件。
	// 请选择深色主题，因为此博客主题目前仅支持深色背景
	theme: "github-dark",
};
