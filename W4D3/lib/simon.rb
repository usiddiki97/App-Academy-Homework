class Simon
  COLORS = %w(red blue green yellow)

  attr_accessor :sequence_length, :game_over, :seq

  def initialize
    @sequence_length = 1
    @game_over = false
    @seq = []
  end

  def play
    until game_over
      system("clear")
      take_turn
    end
    game_over_message
    reset_game
  end

  def take_turn
    show_sequence
    require_sequence
    unless game_over
      round_success_message
      sleep 3
      @sequence_length += 1
    end
  end

  def show_sequence
    add_random_color
    @seq.each do |color|
      puts color
      sleep 1.5
      system("clear")
    end
  end

  def require_sequence
    puts "Enter the colors in the order they appeared in the shown sequence"
    puts "All entries should be lowercase"
    @seq.each do |color|
      input = gets.chomp
      unless color == input
        @game_over = true
        break
      end
    end
  end

  def add_random_color
    @seq << COLORS.sample
  end

  def round_success_message
   puts "Nice! You have completed the round."
  end

  def game_over_message
    puts "Game over! You have made it #{@sequence_length - 1} rounds!"
  end

  def reset_game
    @sequence_length = 1
    @game_over = false
    @seq = []
  end
end

game = Simon.new
game.play