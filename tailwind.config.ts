import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				orange: {
					DEFAULT: 'hsl(var(--orange))',
					foreground: 'hsl(var(--orange-foreground))',
					50: '#fff8f5',
					100: '#fff0ea',
					200: '#ffddd0',
					300: '#ffc2aa',
					400: '#fe9a75',
					500: '#fd7342',
					600: '#ed5a2c',
					700: '#c63d1e',
					800: '#9d321e',
					900: '#7f2c1c',
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				blue: {
					50: '#f0f7ff',
					100: '#e0eeff',
					200: '#c0ddff',
					300: '#85c0ff',
					400: '#4a97ff',
					500: '#2979ff',
					600: '#0e59f2',
					700: '#0c45dd',
					800: '#1039b3',
					900: '#14328c',
				},
				orange: {
					50: '#fff7ed',
					100: '#ffedd5',
					200: '#fed7aa',
					300: '#fdba74',
					400: '#fb923c',
					500: '#f97316',
					600: '#ea580c',
					700: '#c2410c',
					800: '#9a3412',
					900: '#7c2d12',
				},
				hero: {
					bg: '#F0F3FF',
					foreground: '#000000',
					secondary: '#f8fcfc',
					highlight: '#34b4d4',
				},
				// Adding the card colors
				cardColor: {
					blue1: '#879AFF',
					blue2: '#6161FF',
					teal: '#24C4E6',
					purple: '#673971',
					pink: '#FF596D',
					darkBlue: '#1F0F83',
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			transformStyle: {
				'3d': 'preserve-3d',
			},
			backfaceVisibility: {
				'hidden': 'hidden',
				'visible': 'visible',
			},
			perspective: {
				'none': 'none',
				'1000': '1000px',
			},
			rotate: {
				'y-180': 'rotateY(180deg)',
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' }
				},
				fadeIn: {
					'0%': { opacity: '0', transform: 'translateY(10px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' }
				},
				shimmer: {
					'100%': { transform: 'translateX(100%)' }
				},
				scaleIn: {
					'0%': { opacity: '0', transform: 'scale(0.95)' },
					'100%': { opacity: '1', transform: 'scale(1)' }
				},
				float: {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-10px)' }
				},
				pulse: {
					'0%, 100%': { opacity: '1' },
					'50%': { opacity: '0.7' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				fadeIn: 'fadeIn 0.6s ease-out forwards',
				shimmer: 'shimmer 2s infinite',
				scaleIn: 'scaleIn 0.3s ease-out forwards',
				float: 'float 6s ease-in-out infinite',
				pulse: 'pulse 3s ease-in-out infinite'
			},
			fontFamily: {
				sans: ['Poppins', 'system-ui', 'sans-serif'],
				display: ['Poppins', 'system-ui', 'sans-serif'],
				montserrat: ['Montserrat', 'system-ui', 'sans-serif'],
			}
		}
	},
	plugins: [
		require("tailwindcss-animate"),
		function({ addUtilities }) {
			const newUtilities = {
				'.perspective-1000': {
					'perspective': '1000px',
				},
				'.transform-style-3d': {
					'transform-style': 'preserve-3d',
				},
				'.backface-hidden': {
					'backface-visibility': 'hidden',
				},
				'.rotate-y-180': {
					'transform': 'rotateY(180deg)',
				},
			};
			addUtilities(newUtilities);
		},
	],
} satisfies Config;
