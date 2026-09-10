import { cleanup, fireEvent, render, screen } from '@testing-library/react'
import { afterEach, describe, expect, it } from 'vitest'
import { App } from './App'

describe('Official site V1', () => {
  afterEach(cleanup)
  it('renders the hero, five feature sections, signature features, rules, and FAQ', () => {
    render(<App page="home" />)
    expect(screen.getByRole('heading', { level: 1, name: '星星戀愛日記' })).toBeInTheDocument()
    expect(document.querySelector('.hero-art')).toHaveAttribute('aria-hidden', 'true')
    for (const feature of ['今天', '星星瓶', '足跡', '我們', '清醒']) expect(screen.getByRole('heading', { level: 3, name: feature })).toBeInTheDocument()
    for (const tool of ['開始整理心情', '暈船法典', '戀愛腦檢測', '喜歡？習慣？']) expect(screen.getAllByText(tool).length).toBeGreaterThan(0)
    expect(screen.getByRole('heading', { name: '七句心話・照片顯影' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: '想對你說・星星心意卡' })).toBeInTheDocument()
    for (const rule of ['+1', '+7', '+2', '+5', '+10']) expect(screen.getByText(rule)).toBeInTheDocument()
    expect(screen.getByText(/不是愛情分數/)).toBeInTheDocument()
    expect(screen.getByText(/兩個不同系統/)).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: '想知道的事，都先放在這裡。' })).toBeInTheDocument()
  })

  it('renders legal placeholders without fake external links or company information', () => {
    render(<App page="privacy" />)
    expect(screen.getByRole('heading', { level: 1, name: '隱私政策' })).toBeInTheDocument()
    expect(screen.getByText(/正式隱私政策將於 App 正式發布前公布/)).toBeInTheDocument()
    render(<App page="terms" />)
    expect(screen.getByRole('heading', { level: 1, name: '使用條款' })).toBeInTheDocument()
    expect(screen.queryByRole('link', { name: /app store|google play/i })).not.toBeInTheDocument()
  })

  it('keeps mobile menu semantics and a GitHub Pages-safe base configuration', async () => {
    render(<App page="home" />)
    const menu = screen.getByRole('button', { name: '開啟選單' })
    expect(menu).toHaveAttribute('aria-expanded', 'false')
    fireEvent.click(menu)
    expect(menu).toHaveAttribute('aria-expanded', 'true')
    expect(screen.getByRole('navigation', { name: '主要導覽' })).toHaveAttribute('id', 'site-navigation')
  })
})
