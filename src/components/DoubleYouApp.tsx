'use client';
import { useMemo, useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Slider } from '@/components/ui/slider';
import { Book, Palette, Music, Laptop, Sparkles, Download, Edit, Trash2, Save, FileText, Image as ImageIcon, Music2, BadgeCheck, Zap } from 'lucide-react';

export default function DoubleYouApp({ initialPlan = 'free' }: { initialPlan?: 'free' | 'premium' }) {
  const [plan, setPlan] = useState<'free' | 'premium'>(initialPlan);
  const isPremium = plan === 'premium';
  const outlineClass = isPremium ? 'border-4 border-yellow-500' : 'border-4 border-blue-500';

  // Generator
  const [prompt, setPrompt] = useState('');
  const [productType, setProductType] = useState<'ebook' | 'template' | 'audio'>('ebook');

  // Ebook editor
  const [ebookContent, setEbookContent] = useState(`# Sample Title

Introduction...

## Chapter 1: Why this matters
Your content here...

## Chapter 2: Getting started
...`);
  const wordCount = useMemo(() => ebookContent.trim().split(/\s+/).filter(Boolean).length, [ebookContent]);

  // Template editor
  const [templateTitle, setTemplateTitle] = useState('Minimal Planner');
  const [primaryHex, setPrimaryHex] = useState('#2563eb');
  const [accentHex, setAccentHex] = useState('#eab308');
  const [fontScale, setFontScale] = useState([16]);

  // Audio editor
  const [voice, setVoice] = useState('Neutral Female');
  const [bpm, setBpm] = useState([100]);
  const [trim, setTrim] = useState([0, 30]);

  // Library (mock)
  const sampleLibrary = [
    { id: 1, title: '30-Day Fitness Guide', type: 'ebook' },
    { id: 2, title: 'Aesthetic Planner Template', type: 'template' },
    { id: 3, title: 'Motivational Voiceover', type: 'audio' },
  ] as const;

  const openInEditor = (item: typeof sampleLibrary[number]) => {
    setProductType(item.type as any);
    document.getElementById('tab-editor')?.click();
  };

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className={\`flex items-center justify-between px-8 py-6 shadow-sm bg-white sticky top-0 z-50 \${outlineClass}\`}>
        <div className="flex items-center space-x-3">
          <div className={\`text-3xl font-bold \${isPremium ? 'text-yellow-500' : 'text-blue-600'}\`}>W</div>
          <span className="font-semibold text-lg">Double You</span>
          <span className={\`ml-2 inline-flex items-center gap-1 text-xs px-2 py-1 rounded-full \${isPremium ? 'bg-yellow-100 text-yellow-800' : 'bg-blue-100 text-blue-800'}\`}>
            {isPremium ? <BadgeCheck className="h-3 w-3" /> : <Zap className="h-3 w-3" />}
            {isPremium ? 'Premium — Gold' : 'Free — Blue'}
          </span>
        </div>
        <nav className="hidden md:flex space-x-6 font-medium">
          <a href="#features" className="hover:text-blue-600">Features</a>
          <a href="#pricing" className="hover:text-blue-600">Pricing</a>
          <a href="#dashboard" className="hover:text-blue-600">Dashboard</a>
        </nav>
        <div className="space-x-3">
          <Button variant="ghost">Login</Button>
          <Button className="bg-blue-600 text-white hover:bg-blue-700">Sign Up</Button>
        </div>
      </header>

      {/* Hero */}
      <section className="flex flex-col items-center text-center py-20 px-6">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">The Second You — Create Anything Instantly</h1>
        <p className="text-lg md:text-xl text-gray-600 max-w-2xl mb-8">
          Generate ebooks, templates, voices, and more with AI. You own it — sell anywhere.
        </p>
        <div className="flex space-x-4">
          <Button className="bg-blue-600 text-white hover:bg-blue-700 px-6 py-3 text-lg">Get Started</Button>
          <Button variant="outline" className="px-6 py-3 text-lg">See Examples</Button>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="grid md:grid-cols-5 gap-6 px-10 py-16">
        <Card className="p-6 flex flex-col items-center text-center">
          <Book className="h-10 w-10 text-blue-600 mb-4" />
          <h3 className="font-bold mb-2">Education</h3>
          <p className="text-sm text-gray-600">Ebooks, guides, workshops auto-generated.</p>
        </Card>
        <Card className="p-6 flex flex-col items-center text-center">
          <Palette className="h-10 w-10 text-pink-600 mb-4" />
          <h3 className="font-bold mb-2">Design</h3>
          <p className="text-sm text-gray-600">Canva/Notion-style templates, planners, wallpapers.</p>
        </Card>
        <Card className="p-6 flex flex-col items-center text-center">
          <Music className="h-10 w-10 text-green-600 mb-4" />
          <h3 className="font-bold mb-2">Audio & Video</h3>
          <p className="text-sm text-gray-600">Voices, beats, SFX, stock-like clips.</p>
        </Card>
        <Card className="p-6 flex flex-col items-center text-center">
          <Laptop className="h-10 w-10 text-indigo-600 mb-4" />
          <h3 className="font-bold mb-2">Business</h3>
          <p className="text-sm text-gray-600">Prompts, spreadsheets, sites, UI kits.</p>
        </Card>
        <Card className="p-6 flex flex-col items-center text-center">
          <Sparkles className="h-10 w-10 text-yellow-600 mb-4" />
          <h3 className="font-bold mb-2">Niche Packs</h3>
          <p className="text-sm text-gray-600">Fitness, language, recipes, self-help.</p>
        </Card>
      </section>

      {/* Dashboard */}
      <section id="dashboard" className="bg-gray-50 py-20 px-6">
        <h2 className="text-3xl font-bold text-center mb-6">Your Private Workspace</h2>
        <p className="text-gray-600 max-w-xl mx-auto text-center mb-10">Only you can see your projects after login. Generate → edit → export.</p>

        <Tabs defaultValue="generator" className="max-w-6xl mx-auto">
          <TabsList className="flex justify-center space-x-4 mb-8">
            <TabsTrigger value="generator">Generator</TabsTrigger>
            <TabsTrigger value="library">My Library</TabsTrigger>
            <TabsTrigger value="editor" id="tab-editor">Editor</TabsTrigger>
            <TabsTrigger value="settings">Settings</TabsTrigger>
          </TabsList>

          {/* Generator */}
          <TabsContent value="generator">
            <Card className={\`p-6 shadow-lg rounded-2xl \${outlineClass}\`}>
              <h3 className="font-bold text-xl mb-4">AI Product Generator</h3>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="md:col-span-2">
                  <Input placeholder="Describe your idea... (e.g., 30-day high-protein meal plan for students)" value={prompt} onChange={(e) => setPrompt(e.target.value)} />
                </div>
                <div className="flex gap-2 flex-wrap">
                  <Button variant={productType === 'ebook' ? 'default' : 'outline'} onClick={() => setProductType('ebook')} className="flex items-center gap-1"><FileText className="h-4 w-4" />Ebook</Button>
                  <Button variant={productType === 'template' ? 'default' : 'outline'} onClick={() => setProductType('template')} className="flex items-center gap-1"><ImageIcon className="h-4 w-4" />Template</Button>
                  <Button variant={productType === 'audio' ? 'default' : 'outline'} onClick={() => setProductType('audio')} className="flex items-center gap-1"><Music2 className="h-4 w-4" />Audio</Button>
                </div>
              </div>
              <div className="mt-4 flex gap-3">
                <Button className="bg-blue-600 text-white hover:bg-blue-700">Generate</Button>
                {!isPremium && (<Button variant="outline">Upgrade for faster & longer outputs</Button>)}
              </div>
            </Card>
          </TabsContent>

          {/* Library */}
          <TabsContent value="library">
            <div className="grid md:grid-cols-3 gap-6">
              {sampleLibrary.map((item) => (
                <Card key={item.id} className="p-4 flex flex-col justify-between shadow-md rounded-2xl">
                  <div>
                    <h4 className="font-bold mb-1">{item.title}</h4>
                    <p className="text-xs text-gray-500 capitalize">Type: {item.type}</p>
                  </div>
                  <div className="flex justify-between mt-4">
                    <Button variant="outline" size="sm" className="flex items-center gap-1"><Download className="h-4 w-4" />Download</Button>
                    <Button variant="outline" size="sm" onClick={() => openInEditor(item)} className="flex items-center gap-1"><Edit className="h-4 w-4" />Edit</Button>
                    <Button variant="destructive" size="sm" className="flex items-center gap-1"><Trash2 className="h-4 w-4" />Delete</Button>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Editor */}
          <TabsContent value="editor">
            <div className="grid lg:grid-cols-2 gap-6">
              {/* Left controls */}
              <Card className={\`p-6 shadow-md rounded-2xl \${outlineClass}\`}>
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-sm text-gray-600">Editing:</span>
                  <div className="flex gap-2 flex-wrap">
                    <Button variant={productType === 'ebook' ? 'default' : 'outline'} onClick={() => setProductType('ebook')} className="flex items-center gap-1"><FileText className="h-4 w-4" />Ebook</Button>
                    <Button variant={productType === 'template' ? 'default' : 'outline'} onClick={() => setProductType('template')} className="flex items-center gap-1"><ImageIcon className="h-4 w-4" />Template</Button>
                    <Button variant={productType === 'audio' ? 'default' : 'outline'} onClick={() => setProductType('audio')} className="flex items-center gap-1"><Music2 className="h-4 w-4" />Audio</Button>
                  </div>
                </div>

                {productType === 'ebook' && (
                  <div className="space-y-3">
                    <div className="flex gap-2 flex-wrap">
                      <Button variant="outline" onClick={() => setEbookContent((t) => `# ${stripHashes(t)}`)}>H1</Button>
                      <Button variant="outline" onClick={() => setEbookContent((t) => `## ${stripHashes(t)}`)}>H2</Button>
                      <Button variant="outline" onClick={() => setEbookContent((t) => `**${t}**`)}>Bold</Button>
                      <Button variant="outline" onClick={() => setEbookContent((t) => `*${t}*`)}>Italic</Button>
                      <Button variant="outline" onClick={() => setEbookContent((t) => `${t}\n\n- Bullet 1\n- Bullet 2`)}>List</Button>
                    </div>
                    <Textarea value={ebookContent} onChange={(e) => setEbookContent(e.target.value)} className="h-64" />
                    <div className="text-xs text-gray-500">{wordCount} words</div>
                    <div className="flex gap-2">
                      <Button className="bg-green-600 text-white hover:bg-green-700 flex items-center gap-1"><Save className="h-4 w-4" />Save</Button>
                      <Button variant="outline">Export PDF</Button>
                      <Button variant="outline">Export EPUB</Button>
                    </div>
                  </div>
                )}

                {productType === 'template' && (
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="text-xs text-gray-600">Title</label>
                        <Input value={templateTitle} onChange={(e) => setTemplateTitle(e.target.value)} />
                      </div>
                      <div>
                        <label className="text-xs text-gray-600">Font size</label>
                        <Slider min={12} max={28} step={1} value={fontScale} onValueChange={setFontScale} />
                      </div>
                      <div>
                        <label className="text-xs text-gray-600">Primary color</label>
                        <Input type="color" value={primaryHex} onChange={(e) => setPrimaryHex(e.target.value)} />
                      </div>
                      <div>
                        <label className="text-xs text-gray-600">Accent color</label>
                        <Input type="color" value={accentHex} onChange={(e) => setAccentHex(e.target.value)} />
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button className="bg-green-600 text-white hover:bg-green-700 flex items-center gap-1"><Save className="h-4 w-4" />Save</Button>
                      <Button variant="outline">Export PNG</Button>
                      <Button variant="outline">Export PDF</Button>
                      <Button variant="outline">Download ZIP</Button>
                    </div>
                  </div>
                )}

                {productType === 'audio' && (
                  <div className="space-y-4">
                    <div className="grid md:grid-cols-3 gap-4">
                      <div className="md:col-span-2">
                        <label className="text-xs text-gray-600">Voice</label>
                        <select className="w-full border rounded-md h-9 px-3" value={voice} onChange={(e) => setVoice(e.target.value)}>
                          <option>Neutral Female</option>
                          <option>Warm Male</option>
                          <option>Energetic Youth</option>
                          <option>Calm Narrator</option>
                        </select>
                      </div>
                      <div>
                        <label className="text-xs text-gray-600">BPM</label>
                        <Slider min={60} max={180} step={1} value={bpm} onValueChange={setBpm} />
                      </div>
                    </div>
                    <div>
                      <label className="text-xs text-gray-600">Trim (seconds)</label>
                      <Slider min={0} max={120} step={1} value={trim as any} onValueChange={(v: any) => setTrim(v)} />
                      <div className="text-xs text-gray-500">{trim[0]}s – {trim[1]}s</div>
                    </div>
                    <div className="flex gap-2">
                      <Button className="bg-blue-600 text-white hover:bg-blue-700">Generate Voice</Button>
                      <Button variant="outline">Export MP3</Button>
                      <Button variant="outline">Export WAV</Button>
                    </div>
                  </div>
                )}
              </Card>

              {/* Right preview */}
              <Card className="p-6 shadow-md rounded-2xl bg-white">
                <h4 className="font-semibold mb-3">Live Preview</h4>
                {productType === 'ebook' && (
                  <div className="prose max-w-none">
                    <pre className="whitespace-pre-wrap text-sm leading-6">{ebookContent}</pre>
                  </div>
                )}
                {productType === 'template' && (
                  <div
                    className="rounded-xl p-6 border"
                    style={{ borderColor: primaryHex, background: `${primaryHex}10`, color: '#111827' }}
                  >
                    <div style={{ fontSize: `${fontScale[0]}px`, fontWeight: 700, color: primaryHex }}>{templateTitle}</div>
                    <div className="mt-2 text-sm" style={{ color: accentHex }}>
                      • Task • Habit • Notes
                    </div>
                    <div className="mt-4 grid grid-cols-3 gap-3">
                      {['Mon','Tue','Wed','Thu','Fri','Sat','Sun'].map((d) => (
                        <div key={d} className="rounded-lg border p-3 text-center text-xs" style={{ borderColor: accentHex }}>{d}</div>
                      ))}
                    </div>
                  </div>
                )}
                {productType === 'audio' && (
                  <div className="text-sm text-gray-600">
                    <p>Voice: <span className="font-medium">{voice}</span></p>
                    <p>BPM: <span className="font-medium">{bpm[0]}</span></p>
                    <p>Trim: <span className="font-medium">{trim[0]}s–{trim[1]}s</span></p>
                    <div className="mt-4 h-16 rounded-md border flex items-center justify-center">[Waveform preview]</div>
                  </div>
                )}
              </Card>
            </div>
          </TabsContent>

          {/* Settings */}
          <TabsContent value="settings">
            <Card className="p-6 shadow-md rounded-2xl">
              <h3 className="font-bold text-xl mb-4">Account Settings</h3>
              <p className="text-gray-600 mb-2">Current Plan: <span className="font-semibold">{isPremium ? 'Premium (Gold)' : 'Free (Blue)'}</span></p>
              <div className="flex gap-2">
                {!isPremium ? (
                  <Button className="bg-yellow-500 text-white hover:bg-yellow-600" onClick={() => setPlan('premium')}>Upgrade to Premium</Button>
                ) : (
                  <Button variant="outline" onClick={() => setPlan('free')}>Switch to Free (demo)</Button>
                )}
              </div>
            </Card>
          </TabsContent>
        </Tabs>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-16 px-6 bg-white">
        <h2 className="text-3xl font-bold text-center mb-12">Pricing Plans</h2>
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <Card className="p-8 text-center shadow-md rounded-2xl">
            <h3 className="font-bold text-xl mb-4">Free</h3>
            <p className="text-gray-600 mb-6">2 product generations/month. Blue outline dashboard.</p>
            <Button variant="outline">Start Free</Button>
          </Card>
          <Card className="p-8 text-center shadow-lg rounded-2xl border-yellow-500 border-2">
            <h3 className="font-bold text-xl mb-4">Premium</h3>
            <p className="text-gray-600 mb-6">Unlimited generations, advanced editors, gold outline dashboard.</p>
            <Button className="bg-yellow-500 text-white hover:bg-yellow-600">€19 / month</Button>
          </Card>
          <Card className="p-8 text-center shadow-md rounded-2xl">
            <h3 className="font-bold text-xl mb-4">Enterprise</h3>
            <p className="text-gray-600 mb-6">Bulk creation & team seats for agencies.</p>
            <Button variant="outline">Contact Us</Button>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 text-center py-10 mt-12">
        <p className="mb-2">© 2025 Double You. All rights reserved.</p>
        <p className="text-sm">Motto: "The Second You"</p>
      </footer>
    </div>
  );
}

function stripHashes(t: string) {
  return t.replace(/^#+\s*/, '');
}
