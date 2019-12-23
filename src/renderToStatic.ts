import render from './render'

export default function renderToStatic(value: any): string {
  return render(value, 0)
}
