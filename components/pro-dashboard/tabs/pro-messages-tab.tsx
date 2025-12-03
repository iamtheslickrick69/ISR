"use client"

import { useState } from "react"
import {
  Search,
  Send,
  Paperclip,
  MoreVertical,
  Phone,
  Video,
  Star,
  Archive,
  Trash2,
  Check,
  CheckCheck,
  Clock,
  Image,
  FileText,
  X,
  Plus,
  Filter,
  Bell,
  Settings,
} from "lucide-react"

// Types
interface Message {
  id: string
  content: string
  timestamp: string
  isOwn: boolean
  status: "sent" | "delivered" | "read"
  attachment?: { type: "image" | "file", name: string }
}

interface Conversation {
  id: string
  client: string
  clientInitials: string
  avatar?: string
  lastMessage: string
  lastMessageTime: string
  unread: number
  isOnline: boolean
  isStarred: boolean
  messages: Message[]
}

// Mock data
const mockConversations: Conversation[] = [
  {
    id: "1",
    client: "John Davis",
    clientInitials: "JD",
    lastMessage: "Thanks coach! See you tomorrow at 9am",
    lastMessageTime: "2 min ago",
    unread: 2,
    isOnline: true,
    isStarred: true,
    messages: [
      { id: "1", content: "Hi Coach Blake! I wanted to ask about our next lesson.", timestamp: "10:30 AM", isOwn: false, status: "read" },
      { id: "2", content: "Of course John! What would you like to focus on?", timestamp: "10:32 AM", isOwn: true, status: "read" },
      { id: "3", content: "I've been struggling with my driver. Can we work on that?", timestamp: "10:35 AM", isOwn: false, status: "read" },
      { id: "4", content: "Absolutely! I have some great drills for that. Let's start with your grip and setup. I noticed in our last session you were gripping too tight.", timestamp: "10:38 AM", isOwn: true, status: "read" },
      { id: "5", content: "That makes sense. I've been trying to hit it harder but it's going left", timestamp: "10:40 AM", isOwn: false, status: "read" },
      { id: "6", content: "Common issue! We'll fix that tomorrow. Come 10 min early so we can warm up properly", timestamp: "10:42 AM", isOwn: true, status: "delivered" },
      { id: "7", content: "Thanks coach! See you tomorrow at 9am", timestamp: "10:45 AM", isOwn: false, status: "read" },
    ],
  },
  {
    id: "2",
    client: "Sarah Miller",
    clientInitials: "SM",
    lastMessage: "Can we reschedule to Thursday?",
    lastMessageTime: "1 hour ago",
    unread: 1,
    isOnline: false,
    isStarred: false,
    messages: [
      { id: "1", content: "Hi Blake, I need to reschedule our Wednesday lesson", timestamp: "9:15 AM", isOwn: false, status: "read" },
      { id: "2", content: "Can we reschedule to Thursday?", timestamp: "9:16 AM", isOwn: false, status: "read" },
    ],
  },
  {
    id: "3",
    client: "Mike Roberts",
    clientInitials: "MR",
    lastMessage: "Here's my swing video from yesterday",
    lastMessageTime: "3 hours ago",
    unread: 0,
    isOnline: true,
    isStarred: true,
    messages: [
      { id: "1", content: "Hey Coach! Practice went well today", timestamp: "6:30 AM", isOwn: false, status: "read" },
      { id: "2", content: "Here's my swing video from yesterday", timestamp: "6:31 AM", isOwn: false, status: "read", attachment: { type: "file", name: "swing_video.mp4" } },
      { id: "3", content: "Great work Mike! I'll review and send feedback", timestamp: "7:45 AM", isOwn: true, status: "read" },
    ],
  },
  {
    id: "4",
    client: "Lisa Wong",
    clientInitials: "LW",
    lastMessage: "Perfect, I'll see you then!",
    lastMessageTime: "Yesterday",
    unread: 0,
    isOnline: false,
    isStarred: false,
    messages: [
      { id: "1", content: "Looking forward to our session tomorrow!", timestamp: "Yesterday", isOwn: false, status: "read" },
      { id: "2", content: "Me too! We'll work on your short game as discussed", timestamp: "Yesterday", isOwn: true, status: "read" },
      { id: "3", content: "Perfect, I'll see you then!", timestamp: "Yesterday", isOwn: false, status: "read" },
    ],
  },
  {
    id: "5",
    client: "Tom Kennedy",
    clientInitials: "TK",
    lastMessage: "Thanks for the drill suggestions!",
    lastMessageTime: "2 days ago",
    unread: 0,
    isOnline: false,
    isStarred: false,
    messages: [
      { id: "1", content: "What drills should I practice this week?", timestamp: "2 days ago", isOwn: false, status: "read" },
      { id: "2", content: "Focus on the gate drill for putting - 10 min daily", timestamp: "2 days ago", isOwn: true, status: "read" },
      { id: "3", content: "Thanks for the drill suggestions!", timestamp: "2 days ago", isOwn: false, status: "read" },
    ],
  },
]

export function ProMessagesTab() {
  const [conversations, setConversations] = useState(mockConversations)
  const [selectedConversation, setSelectedConversation] = useState<Conversation | null>(conversations[0])
  const [newMessage, setNewMessage] = useState("")
  const [searchQuery, setSearchQuery] = useState("")
  const [filter, setFilter] = useState<"all" | "unread" | "starred">("all")
  const [showMobileList, setShowMobileList] = useState(true)

  const filteredConversations = conversations.filter(conv => {
    const matchesSearch = conv.client.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesFilter = filter === "all" ? true :
      filter === "unread" ? conv.unread > 0 :
      filter === "starred" ? conv.isStarred : true
    return matchesSearch && matchesFilter
  })

  const totalUnread = conversations.reduce((sum, conv) => sum + conv.unread, 0)

  const handleSendMessage = () => {
    if (!newMessage.trim() || !selectedConversation) return

    const message: Message = {
      id: Date.now().toString(),
      content: newMessage,
      timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      isOwn: true,
      status: "sent",
    }

    setConversations(prev => prev.map(conv => {
      if (conv.id === selectedConversation.id) {
        return {
          ...conv,
          messages: [...conv.messages, message],
          lastMessage: newMessage,
          lastMessageTime: "Just now",
        }
      }
      return conv
    }))

    setSelectedConversation(prev => prev ? {
      ...prev,
      messages: [...prev.messages, message],
      lastMessage: newMessage,
      lastMessageTime: "Just now",
    } : null)

    setNewMessage("")
  }

  const toggleStar = (convId: string) => {
    setConversations(prev => prev.map(conv => {
      if (conv.id === convId) {
        return { ...conv, isStarred: !conv.isStarred }
      }
      return conv
    }))
  }

  const selectConversation = (conv: Conversation) => {
    setSelectedConversation(conv)
    setShowMobileList(false)
    // Mark as read
    setConversations(prev => prev.map(c => {
      if (c.id === conv.id) {
        return { ...c, unread: 0 }
      }
      return c
    }))
  }

  return (
    <div>
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
        <div className="flex items-center gap-3">
          <h2 className="font-serif text-2xl tracking-wider text-white drop-shadow-lg">MESSAGES</h2>
          {totalUnread > 0 && (
            <span className="px-3 py-1 bg-[#BF2424] text-white text-sm font-serif" style={{ clipPath: "polygon(4px 0, 100% 0, 100% calc(100% - 4px), calc(100% - 4px) 100%, 0 100%, 0 4px)" }}>
              {totalUnread} NEW
            </span>
          )}
        </div>
        <button
          className="flex items-center gap-2 px-5 py-2.5 bg-[#226D50] text-white font-serif text-sm tracking-wider shadow-[0_4px_24px_rgba(0,0,0,0.12)] hover:bg-[#1a5a40] transition-colors"
          style={{
            clipPath: "polygon(8px 0, 100% 0, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0 100%, 0 8px)",
          }}
        >
          <Plus className="h-4 w-4" />
          NEW MESSAGE
        </button>
      </div>

      {/* Main Container */}
      <div
        className="bg-white shadow-[0_4px_24px_rgba(0,0,0,0.12)] overflow-hidden"
        style={{
          clipPath: "polygon(16px 0, 100% 0, 100% calc(100% - 16px), calc(100% - 16px) 100%, 0 100%, 0 16px)",
          height: "calc(100vh - 220px)",
          minHeight: "500px",
        }}
      >
        <div className="flex h-full">
          {/* Conversations List */}
          <div className={`w-full lg:w-[360px] border-r border-gray-200 flex flex-col ${!showMobileList ? "hidden lg:flex" : "flex"}`}>
            {/* Search and Filter */}
            <div className="p-4 border-b border-gray-100">
              <div className="relative mb-3">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search conversations..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 bg-gray-50 border border-gray-200 focus:outline-none focus:border-[#226D50] text-sm"
                  style={{
                    clipPath: "polygon(6px 0, 100% 0, 100% calc(100% - 6px), calc(100% - 6px) 100%, 0 100%, 0 6px)",
                  }}
                />
              </div>
              <div className="flex gap-2">
                {(["all", "unread", "starred"] as const).map((f) => (
                  <button
                    key={f}
                    onClick={() => setFilter(f)}
                    className={`flex-1 py-1.5 font-serif text-xs tracking-wider transition-colors ${
                      filter === f
                        ? "bg-[#226D50] text-white"
                        : "bg-gray-100 text-gray-500 hover:bg-gray-200"
                    }`}
                    style={{
                      clipPath: "polygon(4px 0, 100% 0, 100% calc(100% - 4px), calc(100% - 4px) 100%, 0 100%, 0 4px)",
                    }}
                  >
                    {f.toUpperCase()}
                  </button>
                ))}
              </div>
            </div>

            {/* Conversation List */}
            <div className="flex-1 overflow-y-auto">
              {filteredConversations.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full text-gray-400">
                  <Search className="h-8 w-8 mb-2" />
                  <p className="text-sm">No conversations found</p>
                </div>
              ) : (
                filteredConversations.map((conv) => (
                  <button
                    key={conv.id}
                    onClick={() => selectConversation(conv)}
                    className={`w-full p-4 flex items-start gap-3 border-b border-gray-100 text-left transition-colors ${
                      selectedConversation?.id === conv.id ? "bg-[#226D50]/5" : "hover:bg-gray-50"
                    }`}
                  >
                    <div className="relative flex-shrink-0">
                      <div className="w-12 h-12 bg-[#226D50] text-white flex items-center justify-center font-serif" style={{ clipPath: "polygon(6px 0, 100% 0, 100% calc(100% - 6px), calc(100% - 6px) 100%, 0 100%, 0 6px)" }}>
                        {conv.clientInitials}
                      </div>
                      {conv.isOnline && (
                        <div className="absolute bottom-0 right-0 w-3 h-3 bg-[#226D50] border-2 border-white rounded-full" />
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between mb-1">
                        <div className="flex items-center gap-2">
                          <span className="font-serif text-sm text-black">{conv.client}</span>
                          {conv.isStarred && <Star className="h-3 w-3 text-[#D4AF37] fill-[#D4AF37]" />}
                        </div>
                        <span className="text-xs text-gray-400">{conv.lastMessageTime}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <p className="text-sm text-gray-500 truncate pr-2">{conv.lastMessage}</p>
                        {conv.unread > 0 && (
                          <span className="flex-shrink-0 w-5 h-5 bg-[#BF2424] text-white text-xs flex items-center justify-center rounded-full">
                            {conv.unread}
                          </span>
                        )}
                      </div>
                    </div>
                  </button>
                ))
              )}
            </div>
          </div>

          {/* Chat Area */}
          <div className={`flex-1 flex flex-col ${showMobileList ? "hidden lg:flex" : "flex"}`}>
            {selectedConversation ? (
              <>
                {/* Chat Header */}
                <div className="p-4 border-b border-gray-200 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => setShowMobileList(true)}
                      className="lg:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
                    >
                      <X className="h-5 w-5 text-gray-400" />
                    </button>
                    <div className="relative">
                      <div className="w-10 h-10 bg-[#226D50] text-white flex items-center justify-center font-serif text-sm" style={{ clipPath: "polygon(6px 0, 100% 0, 100% calc(100% - 6px), calc(100% - 6px) 100%, 0 100%, 0 6px)" }}>
                        {selectedConversation.clientInitials}
                      </div>
                      {selectedConversation.isOnline && (
                        <div className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-[#226D50] border-2 border-white rounded-full" />
                      )}
                    </div>
                    <div>
                      <h3 className="font-serif text-base text-black">{selectedConversation.client}</h3>
                      <p className="text-xs text-gray-400">
                        {selectedConversation.isOnline ? "Online" : "Offline"}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                      <Phone className="h-5 w-5 text-gray-400" />
                    </button>
                    <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                      <Video className="h-5 w-5 text-gray-400" />
                    </button>
                    <button
                      onClick={() => toggleStar(selectedConversation.id)}
                      className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                    >
                      <Star className={`h-5 w-5 ${selectedConversation.isStarred ? "text-[#D4AF37] fill-[#D4AF37]" : "text-gray-400"}`} />
                    </button>
                    <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                      <MoreVertical className="h-5 w-5 text-gray-400" />
                    </button>
                  </div>
                </div>

                {/* Messages */}
                <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
                  {selectedConversation.messages.map((message) => (
                    <div
                      key={message.id}
                      className={`flex ${message.isOwn ? "justify-end" : "justify-start"}`}
                    >
                      <div
                        className={`max-w-[70%] p-3 ${
                          message.isOwn
                            ? "bg-[#226D50] text-white"
                            : "bg-white text-black shadow-sm"
                        }`}
                        style={{
                          clipPath: message.isOwn
                            ? "polygon(0 0, 100% 0, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0 100%)"
                            : "polygon(8px 0, 100% 0, 100% 100%, 0 100%, 0 8px)",
                        }}
                      >
                        <p className="text-sm">{message.content}</p>
                        {message.attachment && (
                          <div className={`mt-2 p-2 ${message.isOwn ? "bg-white/10" : "bg-gray-100"} flex items-center gap-2`} style={{ clipPath: "polygon(4px 0, 100% 0, 100% calc(100% - 4px), calc(100% - 4px) 100%, 0 100%, 0 4px)" }}>
                            {message.attachment.type === "image" ? (
                              <Image className="h-4 w-4" />
                            ) : (
                              <FileText className="h-4 w-4" />
                            )}
                            <span className="text-xs truncate">{message.attachment.name}</span>
                          </div>
                        )}
                        <div className={`flex items-center justify-end gap-1 mt-1 ${message.isOwn ? "text-white/70" : "text-gray-400"}`}>
                          <span className="text-xs">{message.timestamp}</span>
                          {message.isOwn && (
                            message.status === "read" ? (
                              <CheckCheck className="h-3 w-3" />
                            ) : message.status === "delivered" ? (
                              <CheckCheck className="h-3 w-3 opacity-50" />
                            ) : (
                              <Check className="h-3 w-3" />
                            )
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Message Input */}
                <div className="p-4 border-t border-gray-200 bg-white">
                  <div className="flex items-end gap-3">
                    <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                      <Paperclip className="h-5 w-5 text-gray-400" />
                    </button>
                    <div className="flex-1 relative">
                      <textarea
                        value={newMessage}
                        onChange={(e) => setNewMessage(e.target.value)}
                        onKeyDown={(e) => {
                          if (e.key === "Enter" && !e.shiftKey) {
                            e.preventDefault()
                            handleSendMessage()
                          }
                        }}
                        placeholder="Type a message..."
                        rows={1}
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 focus:outline-none focus:border-[#226D50] text-sm resize-none"
                        style={{
                          clipPath: "polygon(8px 0, 100% 0, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0 100%, 0 8px)",
                        }}
                      />
                    </div>
                    <button
                      onClick={handleSendMessage}
                      disabled={!newMessage.trim()}
                      className={`p-3 transition-colors ${
                        newMessage.trim()
                          ? "bg-[#226D50] text-white hover:bg-[#1a5a40]"
                          : "bg-gray-200 text-gray-400 cursor-not-allowed"
                      }`}
                      style={{
                        clipPath: "polygon(6px 0, 100% 0, 100% calc(100% - 6px), calc(100% - 6px) 100%, 0 100%, 0 6px)",
                      }}
                    >
                      <Send className="h-5 w-5" />
                    </button>
                  </div>
                </div>
              </>
            ) : (
              <div className="flex-1 flex flex-col items-center justify-center text-gray-400">
                <div className="w-20 h-20 bg-gray-100 flex items-center justify-center mb-4" style={{ clipPath: "polygon(12px 0, 100% 0, 100% calc(100% - 12px), calc(100% - 12px) 100%, 0 100%, 0 12px)" }}>
                  <Send className="h-8 w-8" />
                </div>
                <p className="font-serif text-lg">Select a conversation</p>
                <p className="text-sm mt-1">Choose from your existing conversations or start a new one</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
