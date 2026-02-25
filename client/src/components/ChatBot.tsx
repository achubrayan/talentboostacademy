/*
 * DESIGN: Executive Horizon - Editorial Luxury
 * AI Chatbot: Floating widget for visitor engagement with calendar booking
 * Features: Smart responses, service recommendations, in-chat consultation booking, typing indicators, feedback buttons
 */

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { MessageCircle, X, Send, Calendar, Clock, User, Mail, Phone, CheckCircle, ArrowLeft, ThumbsUp, ThumbsDown } from "lucide-react";

interface Message {
  id: string;
  type: "user" | "bot";
  content: string;
  timestamp: Date;
  showBooking?: boolean;
  feedback?: "up" | "down" | null;
}

interface BookingData {
  name: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  service: string;
}

const botResponses: { [key: string]: string } = {
  greeting: "Hello! 👋 Welcome to Talent Boost Academy. How can I help you today? I can assist with information about our services, pricing, or schedule a free consultation.",
  services: "We offer comprehensive HR and talent solutions:\n\n1. Business & HR Consulting\n2. Talent Development & Training\n3. HR Analytics & People Analytics\n4. Online Education (via BIA)\n5. HR Tech & AI (via Flowmingo)\n6. Talent Outsourcing\n\nWhich service interests you? Or would you like to schedule a free consultation?",
  pricing: "Our pricing is customized based on your organization's needs and scope. I'd recommend scheduling a free consultation with our team to discuss your requirements and receive a tailored proposal. Would you like to book a call now?",
  consultation: "I'd be happy to help you schedule a free consultation! Click the button below to select your preferred date and time.",
  about: "Talent Boost Academy is a premium business, HR, and education solutions company. We combine executive-level expertise with innovative methodologies to deliver measurable results. Our founder, Fabrice Achu Ngando, brings extensive experience in HR transformation and people analytics.",
  blog: "We publish regular insights on HR trends, talent development, and industry best practices. Visit our Blog section to explore articles on topics like AI in HR, employee retention, and leadership development.",
  casestudies: "Check out our Case Studies to see how we've helped organizations like Global Tech Solutions reduce turnover by 40%, and Continental Industries achieve 3.2x ROI. Each case study includes detailed metrics and outcomes.",
  contact: "You can reach us at:\n📧 info@talentboostacademy.com\n📞 +1 (555) 123-4567\n\nOr I can help you schedule a free consultation right now!",
  default: "That's a great question! For more detailed information, I'd recommend scheduling a free consultation with our team. Would you like me to help you book a call?",
  bookingSuccess: "🎉 Excellent! Your consultation has been scheduled. You'll receive a confirmation email shortly with meeting details and a calendar invite. Our team looks forward to speaking with you!",
};

const suggestedQuestions = [
  "Tell me about your services",
  "Schedule a free consultation",
  "View case studies",
  "Contact information",
];

const availableTimes = [
  "9:00 AM",
  "10:00 AM",
  "11:00 AM",
  "1:00 PM",
  "2:00 PM",
  "3:00 PM",
  "4:00 PM",
];

const serviceOptions = [
  "Business & HR Consulting",
  "Talent Development & Training",
  "HR Analytics & People Analytics",
  "Online Education Programs",
  "HR Technology Solutions",
  "Talent Outsourcing",
  "General Inquiry",
];

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [showBookingForm, setShowBookingForm] = useState(false);
  const [bookingStep, setBookingStep] = useState(1);
  const [bookingData, setBookingData] = useState<BookingData>({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    service: "",
  });
  const [bookingConfirmed, setBookingConfirmed] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, showBookingForm, bookingStep, isTyping]);

  // Generate available dates (next 14 days, excluding weekends)
  const getAvailableDates = () => {
    const dates: { value: string; label: string }[] = [];
    const today = new Date();
    let count = 0;
    let daysChecked = 0;

    while (count < 10 && daysChecked < 30) {
      const date = new Date(today);
      date.setDate(date.getDate() + daysChecked);
      const dayOfWeek = date.getDay();

      if (dayOfWeek !== 0 && dayOfWeek !== 6) {
        const options: Intl.DateTimeFormatOptions = { weekday: "short", month: "short", day: "numeric" };
        const label = date.toLocaleDateString("en-US", options);
        dates.push({ value: label, label });
        count++;
      }
      daysChecked++;
    }

    return dates;
  };

  const getBotResponse = (userInput: string) => {
    const input = userInput.toLowerCase();

    if (input.includes("service")) {
      return { text: botResponses.services, showBooking: false };
    } else if (input.includes("price") || input.includes("cost")) {
      return { text: botResponses.pricing, showBooking: true };
    } else if (input.includes("consult") || input.includes("book") || input.includes("schedule")) {
      return { text: botResponses.consultation, showBooking: true };
    } else if (input.includes("about") || input.includes("company")) {
      return { text: botResponses.about, showBooking: false };
    } else if (input.includes("blog") || input.includes("article")) {
      return { text: botResponses.blog, showBooking: false };
    } else if (input.includes("case") || input.includes("success")) {
      return { text: botResponses.casestudies, showBooking: false };
    } else if (input.includes("contact") || input.includes("reach")) {
      return { text: botResponses.contact, showBooking: true };
    } else {
      return { text: botResponses.default, showBooking: true };
    }
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim() || isLoading || showBookingForm) return;

    const textToSend = inputValue;
    const userMessage: Message = {
      id: Date.now().toString(),
      type: "user",
      content: textToSend,
      timestamp: new Date(),
      feedback: null,
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");
    setIsLoading(true);
    setIsTyping(true);

    // Simulate typing delay (2-3 seconds)
    setTimeout(() => {
      setIsTyping(false);
      const response = getBotResponse(textToSend);
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        type: "bot",
        content: response.text,
        timestamp: new Date(),
        showBooking: response.showBooking,
        feedback: null,
      };
      setMessages((prev) => [...prev, botMessage]);
      setIsLoading(false);
    }, 2000 + Math.random() * 1000);
  };

  const handleOpenChat = () => {
    setIsOpen(true);
    if (messages.length === 0) {
      const greeting: Message = {
        id: "greeting",
        type: "bot",
        content: botResponses.greeting,
        timestamp: new Date(),
        feedback: null,
      };
      setMessages([greeting]);
    }
  };

  const handleCloseChat = () => {
    setIsOpen(false);
  };

  const handleStartBooking = () => {
    setShowBookingForm(true);
    setBookingStep(1);
    setBookingConfirmed(false);
  };

  const handleBookingSubmit = () => {
    setBookingConfirmed(true);
    setShowBookingForm(false);

    const confirmationMessage: Message = {
      id: Date.now().toString(),
      type: "bot",
      content: `${botResponses.bookingSuccess}\n\n📅 ${bookingData.date}\n⏰ ${bookingData.time}\n📋 ${bookingData.service}\n👤 ${bookingData.name}`,
      timestamp: new Date(),
      feedback: null,
    };
    setMessages((prev) => [...prev, confirmationMessage]);

    // Reset booking data
    setBookingData({
      name: "",
      email: "",
      phone: "",
      date: "",
      time: "",
      service: "",
    });
    setBookingStep(1);
  };

  const handleFeedback = (messageId: string, feedbackType: "up" | "down") => {
    setMessages((prev) =>
      prev.map((msg) =>
        msg.id === messageId ? { ...msg, feedback: msg.feedback === feedbackType ? null : feedbackType } : msg
      )
    );
  };

  const renderBookingForm = () => {
    const availableDates = getAvailableDates();

    return (
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white border border-border rounded-xl p-4 mx-4 mb-4 shadow-lg"
      >
        <div className="flex items-center justify-between mb-4">
          <h4 className="font-serif font-semibold text-primary flex items-center gap-2">
            <Calendar size={18} />
            Schedule Consultation
          </h4>
          <button
            onClick={() => setShowBookingForm(false)}
            className="text-muted-foreground hover:text-foreground"
          >
            <X size={18} />
          </button>
        </div>

        {/* Progress Indicator */}
        <div className="flex items-center gap-2 mb-4">
          {[1, 2, 3].map((step) => (
            <div
              key={step}
              className={`flex-1 h-1 rounded-full ${
                step <= bookingStep ? "bg-primary" : "bg-muted"
              }`}
            />
          ))}
        </div>

        {/* Step 1: Date & Time */}
        {bookingStep === 1 && (
          <div className="space-y-3">
            <div>
              <label className="text-xs font-semibold text-foreground mb-2 block">Select Date</label>
              <select
                value={bookingData.date}
                onChange={(e) => setBookingData({ ...bookingData, date: e.target.value })}
                className="w-full px-3 py-2 text-sm rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary/50"
              >
                <option value="">Choose a date...</option>
                {availableDates.map((date) => (
                  <option key={date.value} value={date.value}>
                    {date.label}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="text-xs font-semibold text-foreground mb-2 block">Select Time</label>
              <select
                value={bookingData.time}
                onChange={(e) => setBookingData({ ...bookingData, time: e.target.value })}
                className="w-full px-3 py-2 text-sm rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary/50"
              >
                <option value="">Choose a time...</option>
                {availableTimes.map((time) => (
                  <option key={time} value={time}>
                    {time}
                  </option>
                ))}
              </select>
            </div>

            <Button
              onClick={() => bookingData.date && bookingData.time && setBookingStep(2)}
              disabled={!bookingData.date || !bookingData.time}
              className="w-full bg-primary hover:bg-primary/90 text-white"
            >
              Continue
            </Button>
          </div>
        )}

        {/* Step 2: Service Selection */}
        {bookingStep === 2 && (
          <div className="space-y-3">
            <label className="text-xs font-semibold text-foreground mb-2 block">Select Service</label>
            <select
              value={bookingData.service}
              onChange={(e) => setBookingData({ ...bookingData, service: e.target.value })}
              className="w-full px-3 py-2 text-sm rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary/50"
            >
              <option value="">Choose a service...</option>
              {serviceOptions.map((service) => (
                <option key={service} value={service}>
                  {service}
                </option>
              ))}
            </select>

            <div className="flex gap-2">
              <Button
                onClick={() => setBookingStep(1)}
                variant="outline"
                className="flex-1"
              >
                <ArrowLeft size={16} className="mr-2" />
                Back
              </Button>
              <Button
                onClick={() => bookingData.service && setBookingStep(3)}
                disabled={!bookingData.service}
                className="flex-1 bg-primary hover:bg-primary/90 text-white"
              >
                Continue
              </Button>
            </div>
          </div>
        )}

        {/* Step 3: Contact Information */}
        {bookingStep === 3 && (
          <div className="space-y-3">
            <div>
              <label className="text-xs font-semibold text-foreground mb-2 block flex items-center gap-1">
                <User size={14} /> Name
              </label>
              <input
                type="text"
                value={bookingData.name}
                onChange={(e) => setBookingData({ ...bookingData, name: e.target.value })}
                placeholder="Your full name"
                className="w-full pl-9 pr-3 py-2 text-sm rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary/50"
              />
            </div>

            <div>
              <label className="text-xs font-semibold text-foreground mb-2 block flex items-center gap-1">
                <Mail size={14} /> Email
              </label>
              <input
                type="email"
                value={bookingData.email}
                onChange={(e) => setBookingData({ ...bookingData, email: e.target.value })}
                placeholder="your@email.com"
                className="w-full pl-9 pr-3 py-2 text-sm rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary/50"
              />
            </div>

            <div>
              <label className="text-xs font-semibold text-foreground mb-2 block flex items-center gap-1">
                <Phone size={14} /> Phone
              </label>
              <input
                type="tel"
                value={bookingData.phone}
                onChange={(e) => setBookingData({ ...bookingData, phone: e.target.value })}
                placeholder="+1 (555) 123-4567"
                className="w-full pl-9 pr-3 py-2 text-sm rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary/50"
              />
            </div>

            {/* Summary */}
            <div className="bg-secondary/50 rounded-lg p-3 text-xs">
              <p className="font-medium text-foreground mb-1">Booking Summary:</p>
              <p className="text-muted-foreground">📅 {bookingData.date} at {bookingData.time}</p>
              <p className="text-muted-foreground">📋 {bookingData.service}</p>
            </div>

            <Button
              onClick={handleBookingSubmit}
              disabled={!bookingData.name || !bookingData.email || !bookingData.phone}
              className="w-full bg-gold hover:bg-gold/90 text-primary font-semibold"
            >
              <CheckCircle size={16} className="mr-2" />
              Confirm Booking
            </Button>
          </div>
        )}
      </motion.div>
    );
  };

  return (
    <>
      {/* Chat Widget */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="fixed bottom-24 right-4 md:right-6 w-96 max-w-[calc(100vw-2rem)] bg-white rounded-2xl shadow-2xl border border-border flex flex-col z-40"
            style={{ height: "600px" }}
          >
            {/* Header */}
            <div className="bg-gradient-purple text-white p-4 rounded-t-2xl flex items-center justify-between">
              <div>
                <h3 className="font-serif font-semibold">Talent Boost Assistant</h3>
                <p className="text-xs text-white/80">Schedule a free consultation</p>
              </div>
              <button
                onClick={handleCloseChat}
                className="p-2 hover:bg-white/30 rounded-lg transition-colors flex-shrink-0 ml-2"
                title="Close chat"
                aria-label="Close chat"
                type="button"
              >
                <X size={20} className="text-white" />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((message) => (
                <div key={message.id}>
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`flex ${message.type === "user" ? "justify-end" : "justify-start"}`}
                  >
                    <div
                      className={`max-w-xs px-4 py-2 rounded-lg whitespace-pre-wrap ${
                        message.type === "user"
                          ? "bg-primary text-white rounded-br-none"
                          : "bg-secondary text-foreground rounded-bl-none"
                      }`}
                    >
                      {message.content}
                    </div>
                  </motion.div>

                  {/* Feedback Buttons for Bot Messages */}
                  {message.type === "bot" && (
                    <motion.div
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mt-2 flex justify-start gap-2"
                    >
                      <button
                        onClick={() => handleFeedback(message.id, "up")}
                        className={`p-1 rounded transition-colors ${
                          message.feedback === "up"
                            ? "bg-green-100 text-green-600"
                            : "bg-muted text-muted-foreground hover:bg-muted/80"
                        }`}
                        title="Helpful"
                      >
                        <ThumbsUp size={16} />
                      </button>
                      <button
                        onClick={() => handleFeedback(message.id, "down")}
                        className={`p-1 rounded transition-colors ${
                          message.feedback === "down"
                            ? "bg-red-100 text-red-600"
                            : "bg-muted text-muted-foreground hover:bg-muted/80"
                        }`}
                        title="Not helpful"
                      >
                        <ThumbsDown size={16} />
                      </button>
                    </motion.div>
                  )}

                  {/* Show booking button after consultation response */}
                  {message.showBooking && !showBookingForm && !bookingConfirmed && message.type === "bot" && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mt-2 flex justify-start"
                    >
                      <Button
                        onClick={handleStartBooking}
                        className="bg-gold hover:bg-gold/90 text-primary font-semibold text-sm"
                      >
                        <Calendar size={16} className="mr-2" />
                        Book Free Consultation
                      </Button>
                    </motion.div>
                  )}
                </div>
              ))}

              {/* Typing Indicator */}
              {isTyping && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex justify-start"
                >
                  <div className="bg-secondary text-foreground rounded-lg rounded-bl-none px-4 py-2 flex gap-1">
                    <motion.div
                      animate={{ y: [0, -5, 0] }}
                      transition={{ duration: 0.6, repeat: Infinity }}
                      className="w-2 h-2 bg-muted-foreground rounded-full"
                    />
                    <motion.div
                      animate={{ y: [0, -5, 0] }}
                      transition={{ duration: 0.6, repeat: Infinity, delay: 0.2 }}
                      className="w-2 h-2 bg-muted-foreground rounded-full"
                    />
                    <motion.div
                      animate={{ y: [0, -5, 0] }}
                      transition={{ duration: 0.6, repeat: Infinity, delay: 0.4 }}
                      className="w-2 h-2 bg-muted-foreground rounded-full"
                    />
                  </div>
                </motion.div>
              )}

              {/* Suggested Questions (shown on first load) */}
              {messages.length === 1 && !showBookingForm && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-4 space-y-2"
                >
                  <p className="text-xs text-muted-foreground font-semibold">Quick questions:</p>
                  {suggestedQuestions.map((question) => (
                    <button
                      key={question}
                      onClick={() => {
                        setInputValue(question);
                        setTimeout(() => {
                          const form = document.querySelector("form");
                          if (form) form.dispatchEvent(new Event("submit", { bubbles: true }));
                        }, 0);
                      }}
                      className="w-full text-left text-xs p-2 rounded-lg bg-secondary hover:bg-secondary/80 text-foreground transition-colors"
                    >
                      {question}
                    </button>
                  ))}
                </motion.div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Booking Form */}
            {showBookingForm && renderBookingForm()}

            {/* Input Area */}
            <form
              onSubmit={handleSendMessage}
              className="border-t border-border p-3 flex gap-2 bg-background rounded-b-2xl"
            >
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Type your message..."
                disabled={isLoading || showBookingForm}
                className="flex-1 px-3 py-2 text-sm rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary/50 disabled:bg-muted"
              />
              <button
                type="submit"
                disabled={isLoading || !inputValue.trim() || showBookingForm}
                className="p-2 bg-primary hover:bg-primary/90 disabled:bg-muted text-white rounded-lg transition-colors"
              >
                <Send size={18} />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Button */}
      <motion.button
        onClick={handleOpenChat}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-6 right-4 md:right-6 w-14 h-14 rounded-full bg-gradient-purple text-white shadow-lg hover:shadow-xl transition-shadow flex items-center justify-center z-40"
        type="button"
      >
        {!isOpen && <MessageCircle size={24} />}
      </motion.button>
    </>
  );
}
