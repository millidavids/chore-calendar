module ApplicationHelper
  def body_class
    classes = [params[:controller].split('/').first]
    classes << params[:controller].split('/').join('-')
    classes << params[:action]
    day_name = Time.now.strftime('%A').downcase
    if %w(saturday sunday).include? day_name
      classes << 'weekend-color'
    else
      classes << "#{day_name}-color"
    end
    classes.uniq.join(' ')
  end
end
